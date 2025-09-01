# Stock Price Dashboard

A stock price dashboard built with **React + Vite + Tailwind CSS**, showing a table of stock quotes and an interactive chart. Data is fetched from the **Alpha Vantage API** using a demo or personal API key.

<img width="1439" height="790" alt="image" src="https://github.com/user-attachments/assets/3a63ad7f-4258-4c70-9aa9-a20bda1c8d3b" />

---

## Features
- Table with stock **symbol, price, and change %**
- Click on a symbol to view a **30‑day line chart**
- Styled with **Tailwind CSS**
- Responsive layout

---

## Tech Stack
- React 18 (Vite)
- Tailwind CSS
- Recharts (charts)

---

## Prerequisites
- **Node.js** ≥ 18 and **npm** ≥ 9
- An **Alpha Vantage API key** (free) → [https://www.alphavantage.co/support/#api-key](https://www.alphavantage.co/support/#api-key)

> The project currently has the API key **hardcoded** inside `App.jsx`. Replace it with your own key.

---

## Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/xDynamo01/Stock-DashBoard.git
cd Stock-DashBoard
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run in development
```bash
npm run dev
```
Open the printed URL (default: [http://localhost:5173](http://localhost:5173)).

### 4. Build for production
```bash
npm run build
```
The output is generated in `dist/`.

### 5. Preview production build
```bash
npm run preview
```

---

## API Key Configuration
The API key is currently defined directly in `App.jsx`:
```js
const API_KEY = "ED7L9NQVX688YU7N"; // Replace with your Alpha Vantage key
```

To use your own key:
1. Get a free key from [Alpha Vantage](https://www.alphavantage.co/support/#api-key).
2. Replace the string with your key.

⚠️ Do **not** commit your real API key to public repositories. For a more secure approach, use environment variables with Vite (`.env` files prefixed with `VITE_`).

---

## Project Structure
```
.
├─ index.html
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
└─ src/
   ├─ App.jsx
   ├─ main.jsx
   ├─ index.css
   └─ components/
      ├─ StockTable.jsx
      └─ StockChart.jsx
```

---

## Deployment

### Vercel
1. Push your repo to GitHub.
2. Import the repo on Vercel.
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`

### Netlify
- Build command: `npm run build`
- Publish directory: `dist`

### GitHub Pages
1. Install `gh-pages`:
   ```bash
   npm i -D gh-pages
   ```
2. Add to `package.json`:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```
3. Deploy:
   ```bash
   npm run deploy
   ```

---

## License
MIT (or your preferred license).

