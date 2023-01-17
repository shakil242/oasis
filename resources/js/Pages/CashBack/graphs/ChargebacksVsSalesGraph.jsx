import React,{useState} from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ChargebacksVsSalesGraph() {

  const data = {
  labels: [
    'Success sale',
    'Charge back'
  ],
  datasets: [{
    label: '',
    data: [91.85,8.15],
    backgroundColor: [
      '#FF4069',
      '#FFC234'
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
      <h5 className='h6 text-center mt-2'>Sales converted to Chargebacks</h5>
    </>
  )
}
