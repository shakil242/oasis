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

export default function BillingCycleGraph() {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      }
    },
  };

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Billing Cycle',
        data: [380,0,30,220,0],
        backgroundColor: '#FF4069',
      },
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
