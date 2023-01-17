import React,{useState} from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function ReasonCodeGraph() {
  
  const options = {
    scales: {
        x: {
            ticks: {
                // Include a dollar sign in the ticks
                callback: function(value, index, ticks) {
                    return value + '%';
                }
            }
        }
    },
    indexAxis: 'y',
    responsive: true,
    elements: {
      bar: {
        borderWidth: 0,
      },
    },
    plugins: {
      legend: {
        position: false,
      }
    },
  };

  const data = {
    labels: ['83', '30','41','80','135','137'],
    datasets: [
      {
        label: '',
        data: [54.92,1.85,5,22,30,21],
        backgroundColor: ['#5366cc'],
      }
    ],
  }

  const [chartData, setChartData] = useState(data);

  return (
    <>
      <Bar 
        options={options} 
        data={chartData} 
      />
    </>
  )
}
