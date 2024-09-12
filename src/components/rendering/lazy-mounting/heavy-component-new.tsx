// HeavyComponent.js
import { useEffect, useRef } from "react";
import { Chart } from "chart.js"; // Simulating a heavy third-party library

function HeavyComponentNew() {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      // Simulate expensive computation or rendering of a chart using Chart.js
      const ctx = chartRef.current.getContext("2d");

      if (ctx) {
        // Creating a sample chart (simulating the use of a heavy library)
        const chart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
              {
                label: "Votes",
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });

        return () => {
          // Cleanup chart when component unmounts
          chart.destroy();
        };
      }
    }
  }, []);

  return (
    <div>
      <h2>Heavy Data Visualization</h2>
      <canvas ref={chartRef} width="400" height="200"></canvas>
    </div>
  );
}

export default HeavyComponentNew;
