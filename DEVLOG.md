# DEVLOG – Sito Pietro Talpo

## 2026-05-30 — Aggiunta Iubenda Consent Solution

**Stato attuale:** `main`.

**Cosa è stato fatto:**
- Aggiunto in `<head>` di tutte e 4 le pagine production il quarto componente Iubenda: la Consent Solution (`iubenda_cons.js`) con `api_key` `MicgN1lmg6pUmXxlgOO7xYD4bIpf789s`
- Stessa modifica replicata sul `preview.html` per coerenza

**A cosa serve:**
- Registra la prova di consenso (proof of consent) per le submission dei form, conservando data, timestamp, IP e contenuto della privacy mostrata al momento del consenso. Necessario per la conformità GDPR sui dati raccolti via form.

**Cosa manca per attivarla davvero:**
- I form attuali (4 in totale: hero homepage, contatti, servizi, chi-sono) non hanno un checkbox di consenso alla privacy. Senza checkbox la Consent Solution non ha nulla da registrare.
- Per attivarla bisogna: (a) aggiungere un checkbox "Acconsento al trattamento dei dati come da Privacy Policy" obbligatorio in ogni form, (b) bindare il form a Iubenda con l'API JS (`_iub.cons_instructions.push(["submit", ...])`) o con gli attributi `data-iub-form`.

## 2026-05-30 — Sostituito Cookiebot+Usercentrics con Iubenda

**Stato attuale:** `main`.

**Cosa è stato fatto:**
- Rimossi dal `<head>` di tutte e 4 le pagine: Google Consent Mode v2 inline + Cookiebot main script
- Eliminate le pagine `cookie-policy.html` e `privacy-policy.html` (non più necessarie: Iubenda usa link modali)
- Aggiunto nel `<head>` di tutte e 4 le pagine: Iubenda Privacy Controls and Cookie Solution (`embeds.iubenda.com/widgets/38a01fcd-724c-468f-b7a3-390e4511e3a0.js`)
- Sostituiti i link footer da pagine locali a link Iubenda modali con classi `iubenda-white iubenda-noiframe iubenda-embed`
- Aggiunto il loader `iubenda.js` prima di `</body>` di tutte e 4 le pagine per abilitare il comportamento "click → popup modale"

**Decisioni chiave:**
- Un solo fornitore (Iubenda) per banner cookie + privacy controls + privacy policy + cookie policy: più semplice da gestire per Pietro
- Niente pagine HTML dedicate: i link nel footer aprono direttamente un modal con il testo della policy, riducendo la superficie di codice da mantenere

## 2026-05-26 — P.IVA, Cookie Policy, Privacy Policy

**Stato attuale:** `main`.

**Cosa è stato fatto:**
- Aggiunti gli script Cookiebot (Google Consent Mode v2 + main banner) in `<head>` di tutte e 4 le pagine esistenti (`index.html`, `chi-sono.html`, `servizi.html`, `contatti.html`)
- Creato `cookie-policy.html` con script `CookieDeclaration` per la tabella dei cookie generata dinamicamente da Cookiebot
- Creato `privacy-policy.html` con script Usercentrics Privacy Policy Generator (`data-language="it"`)
- Sostituito il placeholder `P.IVA — Cookie Policy — Privacy` nei footer di tutte e 6 le pagine con la P.IVA reale `05301070289` + link funzionanti a `cookie-policy.html` e `privacy-policy.html`
- `noindex,follow` su entrambe le pagine legali (standard SEO per pagine non rilevanti per le ricerche)

**Decisioni chiave:**
- Cookie banner + Consent Mode v2 in head di TUTTE le pagine: il banner deve apparire ovunque l'utente atterri
- CookieDeclaration script SOLO in `cookie-policy.html`: è il widget che renderizza la tabella dei cookie nel posto giusto del DOM
- Usercentrics PPG SOLO in `privacy-policy.html`: come sopra, renderizza il testo della policy in-place
- Per visualizzare il contenuto generato da Cookiebot/Usercentrics serve un dominio HTTP/HTTPS reale registrato nei rispettivi pannelli: da `file://` non funziona

**Cosa serve dopo il deploy:**
- Aggiungere `pietrotalpo.com` (e/o il dominio `*.netlify.app` se serve testing pre-DNS) come trusted domain nel pannello Cookiebot
- Verificare che la privacy policy Usercentrics renderizzi in italiano

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
