using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace WebAgentur.Models;

public class AnfrageModel
{
    [Required(ErrorMessage = "Bitte wählen Sie ein Paket aus.")]
    public string Paket { get; set; } = string.Empty;

    [Required(ErrorMessage = "Bitte geben Sie den Unternehmensnamen ein.")]
    [StringLength(120, ErrorMessage = "Der Unternehmensname ist zu lang.")]
    public string Unternehmensname { get; set; } = string.Empty;

    [Required(ErrorMessage = "Bitte geben Sie Ihre Branche an.")]
    [StringLength(120, ErrorMessage = "Die Branche ist zu lang.")]
    public string Branche { get; set; } = string.Empty;

    [Required(ErrorMessage = "Bitte geben Sie Ihren Standort an.")]
    [StringLength(120, ErrorMessage = "Der Standort ist zu lang.")]
    public string Standort { get; set; } = string.Empty;

    public bool HatWebsite { get; set; }

    [Required(ErrorMessage = "Bitte wählen Sie aus, ob es bereits eine Website gibt.")]
    public string WebsiteStatus { get; set; } = string.Empty;

    [Url(ErrorMessage = "Bitte geben Sie eine gültige URL an.")]
    [StringLength(240, ErrorMessage = "Die URL ist zu lang.")]
    public string? AktuelleUrl { get; set; }

    [MinLength(1, ErrorMessage = "Bitte wählen Sie mindestens eine Unterseite aus.")]
    public List<string> GewaelteSections { get; set; } = [];

    [StringLength(2000, ErrorMessage = "Die Referenzbeschreibung ist zu lang.")]
    public string? ReferenzWebsites { get; set; }

    [Required(ErrorMessage = "Bitte wählen Sie einen Stil aus.")]
    public string Farbstil { get; set; } = string.Empty;

    public List<string> Funktionen { get; set; } = [];

    [StringLength(120, ErrorMessage = "Die eigene Seite ist zu lang.")]
    public string? EigeneSeite { get; set; }

    [StringLength(160, ErrorMessage = "Die sonstige Funktion ist zu lang.")]
    public string? SonstigeFunktion { get; set; }

    [Required(ErrorMessage = "Bitte wählen Sie aus, ob Sie einen KI-Chatbot wünschen.")]
    public string ChatbotWunsch { get; set; } = string.Empty;

    public List<string> ChatbotFaehigkeiten { get; set; } = [];

    [StringLength(2000, ErrorMessage = "Die Chatbot-Beschreibung ist zu lang.")]
    public string? ChatbotBeschreibung { get; set; }

    [Required(ErrorMessage = "Bitte wählen Sie eine Hosting-Präferenz aus.")]
    public string HostingPraeferenz { get; set; } = string.Empty;

    [Required(ErrorMessage = "Bitte geben Sie Ihren Namen ein.")]
    [StringLength(120, ErrorMessage = "Der Name ist zu lang.")]
    public string Name { get; set; } = string.Empty;

    [Required(ErrorMessage = "Bitte geben Sie Ihre E-Mail-Adresse ein.")]
    [EmailAddress(ErrorMessage = "Bitte geben Sie eine gültige E-Mail-Adresse ein.")]
    [StringLength(160, ErrorMessage = "Die E-Mail-Adresse ist zu lang.")]
    public string Email { get; set; } = string.Empty;

    [Phone(ErrorMessage = "Bitte geben Sie eine gültige Telefonnummer ein.")]
    [StringLength(80, ErrorMessage = "Die Telefonnummer ist zu lang.")]
    public string? Telefon { get; set; }

    [Required(ErrorMessage = "Bitte wählen Sie eine bevorzugte Kontaktzeit.")]
    public string KontaktZeit { get; set; } = string.Empty;

    [Required(ErrorMessage = "Bitte wählen Sie eine Budget-Vorstellung.")]
    public string Budget { get; set; } = string.Empty;

    [StringLength(3000, ErrorMessage = "Die Anmerkungen sind zu lang.")]
    public string? Anmerkungen { get; set; }

    [Range(typeof(bool), "true", "true", ErrorMessage = "Bitte stimmen Sie der Datenschutzerklärung zu.")]
    public bool DatenschutzOk { get; set; }

    public bool PortfolioOk { get; set; }

    public DateTime Timestamp { get; set; }

    [JsonIgnore]
    public bool ChatbotDetailsGewuenscht =>
        ChatbotWunsch.Equals("Ja, interessiert mich", StringComparison.OrdinalIgnoreCase) ||
        ChatbotWunsch.Equals("Ich möchte mehr Infos dazu", StringComparison.OrdinalIgnoreCase);
}
