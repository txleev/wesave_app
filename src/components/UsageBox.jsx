import { useState } from "react";

export default function UsageBox({ results }) {
  const [activeTab, setActiveTab] = useState("total");

  const currentData = results[activeTab];
  const isPerDay = activeTab === "per_day";

  return (
<div className="w-full h-[400px] bg-white border border-blue-200 rounded-2xl shadow-lg p-6 flex flex-col">
<div className="flex space-x-2 mb-4">
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "total"
              ? "bg-blue-600 text-white"
              : "bg-white border border-blue-400"
          }`}
          onClick={() => setActiveTab("total")}
        >
          Total Usage
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "per_day"
              ? "bg-blue-600 text-white"
              : "bg-white border border-blue-400"
          }`}
          onClick={() => setActiveTab("per_day")}
        >
          Per-Day Usage
        </button>
      </div>

      <h3 className="text-md font-semibold mb-2 text-blue-700">
        {isPerDay ? "Average Usage of Water Per Day" : "Usage of Water Over All Days"}
      </h3>

      <ul className="overflow-y-auto pr-1 text-sm">
        {Object.entries(currentData).map(([key, value]) => (
          <li key={key} className="flex justify-between mb-1">
            <span className="capitalize">{key.replace("_", " ")}</span>
            <span>{value} L</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
