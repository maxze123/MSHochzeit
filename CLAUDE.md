# MSHochzeit — Hochzeitswebsite

## Projektübersicht
Statische Hochzeitswebsite für Saskia & Maximilian, Hochzeit am **3. Juni 2028** am **Lago di Garda, Italien**. Eingeladen sind deutschsprachige Gäste; die gesamte Website ist auf Deutsch.

## Technologie
- Plain HTML5 / CSS3 / Vanilla JS (keine Build-Tools, keine Frameworks)
- Fonts via Google Fonts: Cormorant Garamond, Italianno, Jost
- Deployment: statischer Hosting-Provider (z.B. Netlify, Vercel, GitHub Pages)

## Dateistruktur
```
MSHochzeit/
├── index.html          # Haupt-HTML-Datei mit allen Sektionen
├── css/
│   └── style.css       # Gesamtes Design-System (alle Stile)
├── js/
│   └── main.js         # Countdown, FAQ, RSVP, Scroll-Reveal
├── video/
│   └── .gitkeep        # Platzhalter — hero.mp4 hier ablegen
├── CLAUDE.md           # Diese Datei
└── README.md           # Kurzbeschreibung
```

## Sektionen (in Reihenfolge)
| Sektion          | ID               | Hintergrund | Beschreibung                            |
|------------------|------------------|-------------|-----------------------------------------|
| Hero             | `#hero`          | Espresso    | Fullscreen-Video mit Namen & Datum      |
| Countdown        | `#countdown`     | Espresso    | Live-Countdown bis zur Trauung          |
| E-Mail-Updates   | `#updates`       | Cream       | E-Mail-Eintrag (Frontend-only)          |
| Ablauf           | `#ablauf`        | Espresso    | Vertikale Timeline des Tagesablaufs     |
| Unterkünfte      | `#unterkuenfte`  | Cream       | 3 Hotelkarten mit Buchungscodes         |
| FAQ              | `#faq`           | Espresso    | Akkordeon mit 7 häufigen Fragen         |
| RSVP             | `#rsvp`          | Cream       | Anmeldeformular (Frontend-only)         |
| Footer           | —                | Espresso    | Namen, Datum, Copyright                 |

## Design-System
### Farben
- `--cream: #F5F0E8` — Heller Hintergrund
- `--espresso: #3C2415` — Dunkler Hintergrund, Text-Dunkel
- `--espresso-mid: #6B4226` — Akzent, Mittelton
- `--espresso-lt: #A0714F` — Heller Akzent, Labels, Dekolinien

### Typografie
- **Italianno** — Schreibschrift-Akzente (Sektions-Titles, Footer-Namen)
- **Cormorant Garamond** — Elegante Serifenschrift (Timeline-Zeiten, Karten-Namen, Akkordeon-Fragen)
- **Jost 200–300** — Fließtext, Labels, Formulare

### Stil-Prinzipien
- Sehr kleines Schriftbild (0.5–0.85 rem für Body/Labels)
- Großzügiges Letter-Spacing (0.2–0.45em bei Labels)
- Großbuchstaben bei Mikro-Labels
- 0.5px-Linien statt normaler Borders
- Hintergrund-Wechsel: Espresso ↔ Cream (Abschnitt für Abschnitt)
- Scroll-Reveal-Animationen via `.reveal` + `.visible`-Klasse

## Inhalte anpassen

### Namen / Datum / Ort
`index.html` — alle Vorkommen von „Saskia", „Maximilian", „3. Juni 2028", „Lago di Garda"

### Hintergrundbild / -video
`/video/hero.mp4` (MP4, empfohlen: 1920×1080, max. 10 MB)
- Kostenlose Quellen: [pexels.com/search/videos/lake+garda](https://www.pexels.com/search/videos/lake%20garda/)
- Bei fehlendem Video zeigt die Website einen espresso-farbenen Farbverlauf als Fallback

### Hotel-Details
Section `#unterkuenfte` in `index.html` — Hotelnamen, Orte, Preise, Buchungscodes direkt im HTML anpassen

### FAQ-Inhalte
Section `#faq` in `index.html` — `.faq-item`-Blöcke hinzufügen, entfernen oder bearbeiten

### Countdown-Zielzeit
`js/main.js`, Zeile mit:
```js
const wedding = new Date("2028-06-03T14:00:00");
```

### E-Mail-Backend
Die Subscribe-Form sendet momentan keine echten Daten (nur Frontend-Logik). Für echten Versand:
- [Formspree](https://formspree.io) — `action`-Attribut am Form-Element setzen
- [EmailJS](https://www.emailjs.com) — SDK einbinden, `subscribe()`-Funktion anpassen
- Eigenes Backend / Netlify Functions

### RSVP-Backend
Derzeit nur Frontend-Validierung mit Toast-Bestätigung. Für echte Datenerfassung:
- [Formspree](https://formspree.io) — einfachste Lösung, `action` an `#rsvpForm` setzen
- [Netlify Forms](https://www.netlify.com/products/forms/) — `data-netlify="true"` hinzufügen
- [Airtable](https://airtable.com) + API — flexibelste Lösung für eigene Datenbank

## Noch ausstehend / TODO
- [ ] Video `/video/hero.mp4` hinzufügen (kostenlos: pexels.com/search/videos/lake+garda)
- [ ] E-Mail-Service für Subscribe-Form anbinden
- [ ] RSVP-Backend anbinden (Formspree / Netlify Forms / Airtable)
- [ ] OG-Tags / Social-Preview-Bild ergänzen (`og:image`, `og:title`, `twitter:card`)
- [ ] Favicon erstellen (z.B. initiales „S&M" in Espresso)
- [ ] Passwortschutz erwägen (nur für geladene Gäste — z.B. via Netlify Edge Functions)

## Entwicklung
Da kein Build-Prozess existiert, genügt es, `index.html` im Browser zu öffnen.

Für lokales Testen mit Videodatei empfiehlt sich ein einfacher lokaler Server:
```bash
python3 -m http.server 8080
# oder
npx serve .
```
Dann im Browser: [http://localhost:8080](http://localhost:8080)
