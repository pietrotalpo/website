# Sito Pietro Talpo

Sito web istituzionale di Pietro Talpo, doganalista iscritto all'albo dal 2000.

## Stack

- **HTML/CSS/JS** statici, niente build step
- Font: [Red Hat Display](https://fonts.google.com/specimen/Red+Hat+Display) (Google Fonts)
- Icone: [Lucide](https://lucide.dev/) via CDN
- Form: [Netlify Forms](https://docs.netlify.com/forms/setup/) (attivi al deploy)
- Hosting target: [Netlify](https://www.netlify.com/) (piano free)

## Struttura

```
.
├── index.html          Homepage
├── chi-sono.html       Pagina biografica
├── servizi.html        9 servizi doganali (accordion su mobile)
├── contatti.html       Form contatti + mappa Interporto
├── css/style.css       Stile unico per tutte le pagine
├── js/main.js          Burger menu, accordion, animazioni, form submit
└── images/             Asset locali (foto profilo, hero, loghi clienti)
```

## Deploy su Netlify

1. Su [app.netlify.com](https://app.netlify.com), crea nuovo sito da Git
2. Connetti questo repository (`pietrotalpo/website`)
3. Branch: `main`. Build command: vuoto. Publish directory: `.` (root)
4. Deploy

I form sono già configurati con `data-netlify="true"`: Netlify li rileverà automaticamente al primo deploy. Le submission arrivano nella dashboard Netlify > Forms.

## Dominio

Il dominio `pietrotalpo.com` va collegato dopo il primo deploy via Netlify Domain Settings.

## Sviluppo locale

Apri qualsiasi `.html` direttamente nel browser, oppure servi la cartella con:

```bash
python3 -m http.server 8765
```

E vai su [http://localhost:8765](http://localhost:8765).
