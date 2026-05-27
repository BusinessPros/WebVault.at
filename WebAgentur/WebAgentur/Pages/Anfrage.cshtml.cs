using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using WebAgentur.Models;

namespace WebAgentur.Pages;

public class AnfragePageModel(IWebHostEnvironment environment, ILogger<AnfragePageModel> logger) : PageModel
{
    private static readonly SemaphoreSlim FileLock = new(1, 1);
    private static readonly JsonSerializerOptions JsonOptions = new(JsonSerializerDefaults.Web)
    {
        WriteIndented = true
    };

    [BindProperty]
    public AnfrageModel Input { get; set; } = new();

    public void OnGet(string? paket)
    {
        Input.Paket = NormalizePaket(paket);
    }

    public async Task<IActionResult> OnPostAsync()
    {
        Input.Paket = NormalizePaket(Input.Paket);
        Input.HatWebsite = Input.WebsiteStatus.Equals("Ja", StringComparison.OrdinalIgnoreCase) ||
                           Input.WebsiteStatus.Equals("War mal", StringComparison.OrdinalIgnoreCase);
        Input.Timestamp = DateTime.UtcNow;

        if (!ModelState.IsValid)
        {
            return Page();
        }

        if (!await SaveAnfrageAsync(Input))
        {
            return Page();
        }

        return RedirectToPage("/Danke");
    }

    private async Task<bool> SaveAnfrageAsync(AnfrageModel anfrage)
    {
        var dataDirectory = Path.Combine(environment.WebRootPath, "data");
        var filePath = Path.Combine(dataDirectory, "anfragen.json");

        Directory.CreateDirectory(dataDirectory);

        await FileLock.WaitAsync();
        try
        {
            List<AnfrageModel> existing = [];

            if (System.IO.File.Exists(filePath))
            {
                await using var readStream = System.IO.File.OpenRead(filePath);
                existing = await JsonSerializer.DeserializeAsync<List<AnfrageModel>>(readStream, JsonOptions) ?? [];
            }

            existing.Add(anfrage);

            await using var writeStream = System.IO.File.Create(filePath);
            await JsonSerializer.SerializeAsync(writeStream, existing, JsonOptions);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Die Anfrage konnte nicht gespeichert werden.");
            ModelState.AddModelError(string.Empty, "Die Anfrage konnte gerade nicht gespeichert werden. Bitte versuche es erneut.");
            return false;
        }
        finally
        {
            FileLock.Release();
        }

        return true;
    }

    public static string NormalizePaket(string? paket)
    {
        return paket?.Trim().ToLowerInvariant() switch
        {
            "abo" or "pro" or "abo-pro" or "starter" or "business" or "business-ki" => "abo",
            "ki" or "chatbot" or "ki-chatbot" => "chatbot",
            "fixpreis" or "fixpreis-website" => "fixpreis",
            "custom" or "custom-projekt" => "custom",
            "beratung" or "unsicher" => "beratung",
            _ => string.Empty
        };
    }
}
