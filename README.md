# WebVault

Gemeinsames Webprojekt fuer BusinessPros.

## Starten

```powershell
dotnet run --project WebAgentur/WebAgentur/WebAgentur.csproj
```

## Zusammenarbeit mit Git

Vor dem Arbeiten immer den neuesten Stand holen:

```powershell
git pull
```

Aenderungen speichern und hochladen:

```powershell
git status
git add .
git commit -m "Kurze Beschreibung"
git push
```

Wenn beide gleichzeitig an denselben Dateien arbeiten, kann Git beim `pull` nachfragen, welche Version behalten werden soll. Dann erst die Konflikte loesen, danach wieder committen und pushen.

## Lokale Daten

Formular-Anfragen in `WebAgentur/WebAgentur/wwwroot/data/*.json` werden nicht ins Repository hochgeladen, weil dort private Kontakt- oder Kundendaten stehen koennen.
