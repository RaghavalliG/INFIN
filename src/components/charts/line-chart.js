import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );
   const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  

  
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(157, 203, 85, .6)",
        borderColor: "rgba(157, 203, 85, 1)",
        tension: 0.2
      },
      {
        label: "Second dataset",
        data: [33, 25, 35, 51, 54, 76],
        fill: true,
        borderColor: "rgba(217, 246, 170, 1)",
        backgroundColor: "rgba(217, 246, 170, .6)",
        tension: 0.2
      }
    ]
  };

export default function LineChart() {
    return <div className="chart_wrap">
        <Line data={data} />
        
    </div>
  }