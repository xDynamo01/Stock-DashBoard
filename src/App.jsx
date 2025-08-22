import React, { useState, useEffect } from "react";
import StockTable from "./components/StockTable";
import StockChart from "./components/StockChart";

export default function App() {
  const [stocks, setStocks] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_KEY = "ED7L9NQVX688YU7N"; // sua chave Alpha Vantage
  const SYMBOLS = ["AAPL", "MSFT", "GOOGL", "AMZN", "TSLA"];

  useEffect(() => {
    async function fetchData() {
      try {
        const data = [];
        for (const symbol of SYMBOLS) {
          const res = await fetch(
            `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
          );
          const json = await res.json();
          if (json["Global Quote"]) {
            data.push({
              symbol,
              price: json["Global Quote"]["05. price"],
              change: json["Global Quote"]["10. change percent"],
            });
          }
        }
        setStocks(data);
      } catch (err) {
        setError("Erro ao buscar dados");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-400">📊 Stock Dashboard</h1>
      
      {loading && <p className="text-gray-400">Carregando...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <StockTable stocks={stocks} setSelected={setSelected} />
      
      {selected && <StockChart symbol={selected} apiKey={API_KEY} />}
    </div>
  );
}
