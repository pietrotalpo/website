# DEVLOG – Sito Pietro Talpo

## 2026-05-25 — Cambio hero image

**Stato attuale:** `main`.

**Cosa è stato fatto:**
- Sostituito lo sfondo dell'hero in homepage da `hero-truck.jpg` a `hero-containers.jpg` (CSS `.hero-home::before`)
- Aggiornati i meta `og:image` di `index.html`, `servizi.html`, `contatti.html` con la nuova immagine
- File `hero-truck.jpg` mantenuto e ancora usato nella solution-section di `index.html` (sezione "Affidate le pratiche..."): il camion lì funziona da contrasto visivo con il professionista descritto nel testo

**Decisioni chiave:**
- Immagine container coerente con preferenza del cliente di hero neutro senza foto personale
- Riusato il file già presente in `/pTalpo/hero-containers.jpg`, copiato in `website/images/`
- Una sola immagine cambiata, non due: la solution-section continua a usare il camion perché la sua narrativa visiva ("non affidate al trasportatore") richiama proprio quel mezzo

## 2026-05-18 — Setup repo e prima consegna

**Stato attuale:** `main`, primo commit.

**Cosa è stato fatto:**
- Estratto il sito dal file unico `preview.html` di anteprima in struttura production (4 pagine HTML separate + `css/style.css` + `js/main.js` + `images/`)
- Configurati i 4 form per Netlify Forms (`data-netlify="true"`, honeypot anti-spam, hidden `form-name`)
- Eliminata la preview-nav e la logica `showPage()` (la navigazione ora avviene via link `href`)
- Aggiunto README.md, .gitignore (escludo .DS_Store)

**Decisioni chiave:**
- Niente build step: HTML/CSS/JS vanilla per semplicità di hosting Netlify free e per la mantenibilità (cliente non sviluppatore)
- Lucide via CDN (no npm) per le icone — un'unica dipendenza, sempre aggiornata
- Foto profilo embed locale (28 KB thumb + 290 KB medium) — niente CDN
- Logos clienti scaricati localmente da Wikipedia / siti ufficiali — niente Clearbit (è offline da quando HubSpot l'ha acquisito)

**Cosa manca / next steps:**
- [ ] Pietro approva i testi e il design dell'anteprima
- [ ] Collegare il repo a Netlify (Settings > Build & deploy)
- [ ] Registrare e collegare il dominio `pietrotalpo.com`
- [ ] Aggiungere favicon dedicato (ora usa la foto profilo come placeholder)
- [ ] Aggiungere pagina Privacy + Cookie Policy (placeholder presente nel footer)
- [ ] P.IVA da inserire nel footer una volta nota
