export default function GptInsights({ text }) {
    return (
<div className="w-full h-[400px] bg-white border border-blue-200 rounded-2xl shadow-lg p-6 flex flex-col">
<h3 className="text-lg font-semibold mb-4 text-blue-700">💡 GPT-4 Insights</h3>
  
        <div className="flex-1 overflow-y-auto text-gray-800 text-sm whitespace-pre-line">
          {text}
        </div>
      </div>
    );
  }
  