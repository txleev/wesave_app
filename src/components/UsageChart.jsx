import Plot from "react-plotly.js";

export default function UsageChart({ data }) {
  const labels = Object.keys(data);
  const values = Object.values(data);

  return (
<div className="w-full h-[400px] bg-white border border-blue-200 rounded-2xl shadow-lg p-6 flex flex-col">
<h3 className="text-lg font-semibold mb-4 text-blue-700">📊 Usage Chart</h3>

      <div className="flex-1 w-full">
        <Plot
          data={[
            {
              type: "pie",
              labels: labels,
              values: values,
              textinfo: "value", // label = activity, text = liters
              marker: {colors: [
                '#0038FF', '#005DFF', '#007BFF',
                '#3399FF', '#66B2FF', '#99CCFF',
                '#CCE5FF', '#E6F1FC'
              ]},
              texttemplate: "%{label}: %{value}L", // shows label + value
              hole: 0.6,
              insidetextorientation: "radial",
              showlegend: true,
            },
          ]}
          layout={{
            autosize: true,
            height: 300,
            margin: { t: 0, b: 80, l: 0, r: 0 },
            legend: {
              orientation: "h",
              y: -0.25,
              x: 0,
              xanchor: "left",
            },
          }}
          config={{ responsive: true, displayModeBar: false }}
          style={{ width: "100%", height: "100%" }}
          useResizeHandler={true}
        />
      </div>
    </div>
  );
}
