using System.ComponentModel.DataAnnotations;

namespace WebAgentur.Models;

public class KontaktAnfrageModel
{
    [Required(ErrorMessage = "Bitte geben Sie Ihren Namen ein.")]
    [StringLength(120, ErrorMessage = "Der Name ist zu lang.")]
    public string Name { get; set; } = string.Empty;

    [StringLength(140, ErrorMessage = "Der Unternehmensname ist zu lang.")]
    public string? Unternehmen { get; set; }

    [Required(ErrorMessage = "Bitte geben Sie Ihre E-Mail-Adresse ein.")]
    [EmailAddress(ErrorMessage = "Bitte geben Sie eine gültige E-Mail-Adresse ein.")]
    [StringLength(160, ErrorMessage = "Die E-Mail-Adresse ist zu lang.")]
    public string Email { get; set; } = string.Empty;

    [Phone(ErrorMessage = "Bitte geben Sie eine gültige Telefonnummer ein.")]
    [StringLength(80, ErrorMessage = "Die Telefonnummer ist zu lang.")]
    public string? Telefon { get; set; }

    [Required(ErrorMessage = "Bitte wählen Sie eine gewünschte Leistung aus.")]
    public string Leistung { get; set; } = string.Empty;

    [Required(ErrorMessage = "Bitte schreiben Sie eine kurze Nachricht.")]
    [StringLength(3000, ErrorMessage = "Die Nachricht ist zu lang.")]
    public string Nachricht { get; set; } = string.Empty;

    public DateTime Timestamp { get; set; }
}
