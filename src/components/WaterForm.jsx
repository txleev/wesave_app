import { useState } from "react";

export default function WaterForm({ onSubmit }) {
  const [days, setDays] = useState("");
  const [liters, setLiters] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!days || !liters) return;
    onSubmit({ days: parseInt(days), liters: parseFloat(liters) });
  };

  return (
<form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-2xl p-6 border border-blue-100">
  <h2 className="text-xl font-semibold mb-4 text-blue-800">Enter Water Usage Data</h2>

  <label className="block mb-4">
    <span className="text-sm text-gray-700">Days:</span>
    <input
      type="number"
      value={days}
      onChange={(e) => setDays(e.target.value)}
      className="w-full mt-1 p-2 border border-blue-200 focus:border-blue-500 rounded-lg"
      required
    />
  </label>

  <label className="block mb-6">
    <span className="text-sm text-gray-700">Total Liters:</span>
    <input
      type="number"
      value={liters}
      onChange={(e) => setLiters(e.target.value)}
      className="w-full mt-1 p-2 border border-blue-200 focus:border-blue-500 rounded-lg"
      required
    />
  </label>

  <button
    type="submit"
    className="w-full bg-[#0038FF] text-white font-semibold py-2 rounded-full hover:bg-blue-900 transition"
  >
    Analyze
  </button>
</form>

  );
}
