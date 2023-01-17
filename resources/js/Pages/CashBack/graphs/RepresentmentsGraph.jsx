import React,{useState} from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function RepresentmentsGraph() {

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
      data: [228,191,73,0,0,0],
      backgroundColor: [
        '#89043D',
        '#1C3041',
        '#B2ABF2',
        '#18F2B2',
        '#3DDC97',
        'red',
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
