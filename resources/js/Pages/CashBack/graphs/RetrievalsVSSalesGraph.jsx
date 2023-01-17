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


export default function RetrievalsVSSalesGraph() {

  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: false,
      }
    },
  };

  const data = {
    labels: ['Retrievals', 'Sales'],
    datasets: [
      {
        label: '',
        data: [6274,3098],
        backgroundColor: ['#FF4069','#5366cc'],
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
