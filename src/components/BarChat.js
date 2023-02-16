import "chart.js/auto";
import { Bar } from "react-chartjs-2";

function BarChart({ chartData }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Total Bids Per Week</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Total Bids between Monday - Sunday",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}
export default BarChart;
