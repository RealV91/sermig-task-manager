📌 Sermig Task Manager
Un'applicazione web sviluppata con React, Redux Toolkit, React Router, Tailwind CSS e Vite per la gestione delle task dei volontari del Sermig (Arsenale della Pace, Torino).

✅ Funzionalità principali
✅ Autenticazione fittizia con gestione stato tramite Redux

✅ Ruoli utente (Admin/User) con routing protetto

✅ Caricamento Task

✅ Dashboard dinamica (solo per utenti loggati)

✅ Form controllati con validazione

✅ Gestione dello stato globale con Redux Toolkit

✅ Routing con React Router DOM (incluse pagine 404)

✅ UI responsive con Tailwind CSS

✅ Deploy su Netlify con configurazione SPA (_redirects)

📂 Struttura del progetto
php
Copia
Modifica
frontend/
│
├── public/
│   ├── assets/          # Logo Sermig e altre risorse statiche
│   └── _redirects       # Configurazione per Netlify (SPA)
│
├── src/
│   ├── components/      # Componenti riutilizzabili (Navbar, Footer, Forms)
│   ├── pages/           # Pagine principali (Home, Dashboard, Tasks, Login)
│   ├── redux/           # Store, Slice Redux (tasksSlice, authSlice)
│   ├── routes/          # Rotte applicative
│   ├── App.jsx          # Gestione Router principale
│   ├── main.jsx         # Entry point React
│   └── index.css        # Stili globali con Tailwind
│
└── vite.config.js       # Configurazione Vite
🔧 Tecnologie utilizzate
React 18

Redux Toolkit per la gestione dello stato

React Router DOM v6 per il routing

Tailwind CSS per la UI

Formik + Yup per la validazione dei form

Vite per build veloce

Netlify per il deploy

▶ Avvio del progetto in locale
Clona il repository:

bash
Copia
Modifica
git clone https://github.com/tuo-username/sermig-task-manager.git
cd sermig-task-manager
Installa le dipendenze:

bash
Copia
Modifica
npm install
Avvia il server di sviluppo:

bash
Copia
Modifica
npm run dev
🚀 Build per la produzione
Per creare il build ottimizzato:

bash
Copia
Modifica
npm run build
I file verranno generati nella cartella dist/.
Per testare in locale:

bash
Copia
Modifica
npm run preview
🌍 Deploy su Netlify
Assicurati che nella cartella public/ e in dist/ ci sia il file _redirects con:

bash
Copia
Modifica
/*    /index.html   200
Collega il repository a Netlify e imposta:

Build Command: npm run build

Publish Directory: dist

🔒 Credenziali demo
Admin: admin / admin123

User: user / user123

✅ Funzionalità per l'esame
✔ Routing con React Router
✔ Stato globale con Redux + Redux Toolkit
✔ Autenticazione simulata con gestione ruoli
✔ Dashboard privata per utenti loggati
✔ Form controllati con validazione (Formik + Yup)
✔ API simulata con JSON Server (opzionale per test locale)
✔ Deploy completo su Netlify

📌 Autore: Alessio Vautero
📌 Anno: 2025
📌 Corso: Frontend Programming – Esame Finale