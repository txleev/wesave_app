import { useState } from "react";
import WaterForm from "../components/WaterForm";
import UsageBox from "../components/UsageBox";
import UsageChart from "../components/UsageChart";
import GptInsights from "../components/GptInsights";

export default function Home() {
  const [result, setResult] = useState(null);
  const [analysis, setAnalysis] = useState(null);

  const handleSubmit = async ({ days, liters }) => {
    try {
      const response = await fetch("http://172.16.0.162:6969/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ days, liters }),
      });

      const data = await response.json();

      if (data.error) return alert("Error: " + data.error);

      setResult(data.usage);
      setAnalysis(data.analysis.replace(/\*\*/g, ""));
    } catch (err) {
      alert("Failed to connect to backend");
      console.error(err);
    }
  };

  return (
<div
  className="min-h-screen bg-cover bg-center p-6"
  style={{ backgroundImage: `url('https://muralsyourway.vtexassets.com/arquivos/ids/238964/Underwater-Ocean-Bottom-Mural-Wallpaper.jpg?v=638164497054230000')` }}
  >
<h1 className="text-3xl font-bold text-center text-white mb-6">
💧 Water Usage Analyzer
      </h1>

      <div className="max-w-md mx-auto mb-8">
        <WaterForm onSubmit={handleSubmit} />
      </div>

      {result && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <UsageBox results={result} />
          <UsageChart data={result.total} />
          <GptInsights text={analysis} />
        </div>
      )}
    </div>
  );
}
