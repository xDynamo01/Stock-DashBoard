import React from "react";

export default function StockTable({ stocks, setSelected }) {
  return (
    <div className="w-full max-w-3xl bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-gray-700">
          <tr>
            <th className="py-3 px-4">Symbol</th>
            <th className="py-3 px-4">Price</th>
            <th className="py-3 px-4">Change %</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr
              key={stock.symbol}
              className="hover:bg-gray-600 cursor-pointer"
              onClick={() => setSelected(stock.symbol)}
            >
              <td className="py-3 px-4">{stock.symbol}</td>
              <td className="py-3 px-4">${Number(stock.price).toFixed(2)}</td>
              <td
                className={`py-3 px-4 ${
                  stock.change.includes("-") ? "text-red-400" : "text-green-400"
                }`}
              >
                {stock.change}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
