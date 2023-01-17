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



export default function ChargebackBINsGraph() {
  
  const options = {
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
    labels: ['41479', '45894','23498','87674','98735','98623'],
    datasets: [
      {
        label: '',
        data: [0,1,2,3,4,5,6],
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
