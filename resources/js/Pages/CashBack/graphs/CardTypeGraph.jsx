import React,{useState} from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function CardTypeGraph() {

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
      data: [32,14,33,0],
      backgroundColor: [
        // '#89043D',
        // '#1C3041',
        '#5366cc',
        '#FF4069',
        'green',
        '#112B43',
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
