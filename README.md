# 📌 Sermig Task Manager

Un'applicazione web sviluppata con **React**, **Redux Toolkit**, **React Router**, **Tailwind CSS** e **Vite** per la gestione dei task dei volontari del Sermig (Arsenale della Pace, Torino).

---

## ✅ Funzionalità principali
- ✅ **Autenticazione fittizia** con gestione stato tramite Redux
- ✅ **Ruoli utente (Admin/User)** con routing protetto
- ✅ **Gestione Task**
  - Creazione di nuovi task
  - Modifica task esistenti
  - Completamento task
  - Visualizzazione dettagli task
- ✅ **Dashboard dinamica** (solo per utenti loggati)
- ✅ **Form controllati con validazione**
- ✅ **Gestione dello stato globale** con Redux Toolkit
- ✅ **Routing** con React Router DOM (incluse pagine 404)
- ✅ **UI responsive** con Tailwind CSS
- ✅ **Deploy su Netlify** con configurazione SPA (`_redirects`)

---

## 📂 **Struttura del progetto**

```
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
```

---

## 🔧 **Tecnologie utilizzate**
- **React 18**
- **Redux Toolkit** per la gestione dello stato
- **React Router DOM v6** per il routing
- **Tailwind CSS** per la UI
- **Formik + Yup** per la validazione dei form
- **Vite** per build veloce
- **Netlify** per il deploy

---

## ▶ **Avvio del progetto in locale**
1. Clona il repository:
   ```bash
   git clone https://github.com/tuo-username/sermig-task-manager.git
   cd sermig-task-manager
   ```

2. Installa le dipendenze:
   ```bash
   npm install
   ```

3. Avvia il server di sviluppo:
   ```bash
   npm run dev
   ```

---

## 🚀 **Build per la produzione**
Per creare il build ottimizzato:
```bash
npm run build
```

I file verranno generati nella cartella `dist/`.  
Per testare in locale:
```bash
npm run preview
```

---

## 🌍 **Deploy su Netlify**
- Assicurati che nella cartella `public/` e in `dist/` ci sia il file `_redirects` con:
  ```
  /*    /index.html   200
  ```
- Collega il repository a Netlify e imposta:
  - **Build Command**: `npm run build`
  - **Publish Directory**: `dist`

---

## 🔒 **Credenziali demo**
- **Admin:** `admin / admin123`
- **User:** `user / user123`

---

## ✅ Funzionalità per l'esame
✔ Routing con React Router  
✔ Stato globale con Redux + Redux Toolkit  
✔ Autenticazione simulata con gestione ruoli  
✔ Dashboard privata per utenti loggati  
✔ Form controllati con validazione (Formik + Yup)  
✔ API simulata con JSON Server (opzionale per test locale)  
✔ Deploy completo su Netlify  

---

📌 **Autore:** Alessio Vautero  
📌 **Anno:** 2025  
📌 **Corso:** Frontend Programming – Esame Finale  
