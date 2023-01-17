import React,{useState} from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function RefundTypesGraphs() {
  
  const fullRefundData = {
    // labels: [
    //   'Accepted',
    //   'Unknown',
    //   'Pending',
    //   'Insurance',
    //   'Win',
    //   'Loss',
    // ],
    datasets: [{
      label: 'Full refund',
      data: [89,400],
      backgroundColor: [
        'green',
        '#EFEEEE',
      ],
      hoverOffset: 4
    }]
  }
  
  const partialRefundData = {
    datasets: [{
      label: 'Partial refund',
      data: [13,400],
      backgroundColor: [
        '#FF4069',
        '#EFEEEE',
      ],
      hoverOffset: 4
    }]
  }
  
  const noRefundData = {
    datasets: [{
      label: 'Partial refund',
      data: [380,60],
      backgroundColor: [
        '#1C3041',
        '#EFEEEE',
      ],
      hoverOffset: 4
    }]
  }

  const [fullRefund, setfullRefund] = useState(fullRefundData);
  const [partialRefund, setpartialRefund] = useState(partialRefundData);
  const [noRefund, setnoRefund] = useState(noRefundData);

  return (
    <>

      <div className="row">

        <div className="col-md-4 col-sm-6 col-12 borderR--lightGray-1">
          <Doughnut 
            data={fullRefund}
          />
          <p className="text-muted mb-0 small">Total</p>
          <p className="fw-500">89 &nbsp;|&nbsp; 17.4%</p>
        </div>

        <div className="col-md-4 col-sm-6 col-12 borderR--lightGray-1">
          <Doughnut 
            data={partialRefund}
          />
          <p className="text-muted mb-0 small">Total</p>
          <p className="fw-500">13 &nbsp;|&nbsp; 2.15%</p>
        </div>

        <div className="col-md-4 col-sm-6 col-12">
          <Doughnut 
            data={noRefund}
          />
          <p className="text-muted mb-0 small">Total</p>
          <p className="fw-500">407 &nbsp;|&nbsp; 79.1%</p>
        </div>

      </div>
      
    </>
  )
}
