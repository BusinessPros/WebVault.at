using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using WebAgentur.Models;

namespace WebAgentur.Pages;

public class KontaktPageModel(IWebHostEnvironment environment, ILogger<KontaktPageModel> logger) : PageModel
{
    private static readonly SemaphoreSlim FileLock = new(1, 1);
    private static readonly JsonSerializerOptions JsonOptions = new(JsonSerializerDefaults.Web)
    {
        WriteIndented = true
    };

    [BindProperty]
    public KontaktAnfrageModel Input { get; set; } = new();

    public async Task<IActionResult> OnPostAsync()
    {
        Input.Timestamp = DateTime.UtcNow;

        if (!ModelState.IsValid)
        {
            return Page();
        }

        if (!await SaveKontaktAnfrageAsync(Input))
        {
            return Page();
        }

        return RedirectToPage("/Danke");
    }

    private async Task<bool> SaveKontaktAnfrageAsync(KontaktAnfrageModel anfrage)
    {
        var dataDirectory = Path.Combine(environment.WebRootPath, "data");
        var filePath = Path.Combine(dataDirectory, "kontakt-anfragen.json");

        Directory.CreateDirectory(dataDirectory);

        await FileLock.WaitAsync();
        try
        {
            List<KontaktAnfrageModel> existing = [];

            if (System.IO.File.Exists(filePath))
            {
                await using var readStream = System.IO.File.OpenRead(filePath);
                existing = await JsonSerializer.DeserializeAsync<List<KontaktAnfrageModel>>(readStream, JsonOptions) ?? [];
            }

            existing.Add(anfrage);

            await using var writeStream = System.IO.File.Create(filePath);
            await JsonSerializer.SerializeAsync(writeStream, existing, JsonOptions);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Die Kontaktanfrage konnte nicht gespeichert werden.");
            ModelState.AddModelError(string.Empty, "Die Anfrage konnte gerade nicht gespeichert werden. Bitte versuchen Sie es erneut oder schreiben Sie direkt an [E-MAIL].");
            return false;
        }
        finally
        {
            FileLock.Release();
        }

        return true;
    }
}
