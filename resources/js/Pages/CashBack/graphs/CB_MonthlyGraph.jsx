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


export default function CB_MonthlyGraph() {
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: false,
      }
    },
  };

  const data = {
    labels: ['Week 1','Week 2','Week 3','Week 4'],
    datasets: [
      {
        label: '',
        data: [7.97,5.77,2.43,4.01],
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
