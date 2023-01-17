import React,{useState} from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);


export default function PerformanceMetricGraph() {

  const data = {
    // labels: [
    //   'Accepted',
    //   'Unknown',
    //   'Pending',
    //   'Insurance',
    //   'Win',
    //   'Loss',
    // ],
    datasets: [{
      label: '',
      data: [50,0,489],
      backgroundColor: [
        '#FFB915',
        '#1C3041',
        '#89043D',
      ],
      hoverOffset: 4
    }]
  }

  const [chartData, setChartData] = useState(data);

  return (
    <>
      <Doughnut 
        data={chartData}
      />
    </>
  )
}

