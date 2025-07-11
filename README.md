# Sermig Task Manager

Un'applicazione React creata per l'associazione **Sermig - Arsenale della Pace** per gestire i task di volontari e amministratori.

## 🔧 Tecnologie utilizzate

- **React** con Hooks
- **Redux Toolkit + Thunk**
- **React Router DOM**
- **Formik + Yup**
- **Tailwind CSS**
- **JSON Server** (fake API)

## 📦 Installazione

1. Clona o scarica il progetto:
   ```bash
   npm install
   ```

2. Avvia il server JSON:
   ```bash
   npm run server
   ```

3. Avvia l'applicazione React:
   ```bash
   npm start
   ```

## 🔐 Autenticazione (finta)

Login con email + selezione ruolo:
- `admin`: accesso al pannello di gestione
- `user`: accesso ai task e possibilità di completarli

## 🧱 Struttura principali

- **Home:** pagina introduttiva
- **Login:** finta autenticazione
- **Dashboard (admin):**
  - Crea task
  - Modifica o elimina task
- **Tasks:** lista pubblica dei task
- **Task Detail:** pagina dinamica (`/tasks/:id`)
- **NotFound:** pagina 404

## 🧪 Funzionalità Form

1. **Login** (formik + validazione)
2. **Crea Task** (formik + yup)
3. **Modifica Task** (formik + yup)
4. **Completamento Task** (volontario)

## 🖼️ Logo Sermig

Presente nella navbar e home page (`/assets/sermig-logo.jpg`)

## 📝 API

Gestite tramite `JSON Server` (`db.json`) sulla porta `5000`

## 📁 Requisiti Soddisfatti

✅ Routing dinamico  
✅ Redux + Thunk  
✅ Finta autenticazione + ruoli  
✅ Componenti riutilizzabili  
✅ API esterna (JSON Server)  
✅ 4 Form controllati + validazione  
✅ Logo incluso  
✅ 6+ pagine  
✅ Readme completo

---

Creato con ❤️ per il corso **Frontend Programming**
