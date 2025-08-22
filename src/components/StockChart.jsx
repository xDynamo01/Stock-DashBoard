import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function StockChart({ symbol, apiKey }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    async function fetchChart() {
      const res = await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`
      );
      const json = await res.json();
      const timeSeries = json["Time Series (Daily)"];
      if (timeSeries) {
        const formatted = Object.entries(timeSeries)
          .slice(0, 30) // últimos 30 dias
          .map(([date, value]) => ({
            date,
            price: Number(value["4. close"]),
          }))
          .reverse();
        setChartData(formatted);
      }
    }
    fetchChart();
  }, [symbol, apiKey]);

  return (
    <div className="w-full max-w-3xl mt-6 p-4 bg-gray-800 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">📈 {symbol} - Últimos 30 dias</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <Line type="monotone" dataKey="price" stroke="#3b82f6" strokeWidth={2} />
          <CartesianGrid stroke="#444" />
          <XAxis dataKey="date" tick={{ fill: "#ccc", fontSize: 12 }} />
          <YAxis tick={{ fill: "#ccc", fontSize: 12 }} />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
