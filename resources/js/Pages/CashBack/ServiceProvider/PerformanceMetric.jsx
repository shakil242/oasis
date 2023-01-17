import React from 'react'
import PerformanceMetricGraph from '../graphs/PerformanceMetricGraph'

export default function PerformanceMetric() {
  return (
    <>
      <div className="col-md-6 col-12 my-2">
        <div className="card shadow">
          <div className="card-header">
            <h6 className='mb-0'>Call Center Performance Metrics</h6>
          </div>
          <div className="card-body">
            <div className="row">

              <div className="col-md-5 col-12">
                <PerformanceMetricGraph />
              </div>

              <div className="col-md-7 col-12">
                
                <div className="row py-1">
                  <div className="col-sm-6 col-12">
                    <p className="h6 mb-0 h6" style={{color:'#FFB915'}}>Live Rep</p>
                    <p className="h6 text-muted mb-0 small">Total</p>
                    <p className="fw-500">50</p>
                  </div>
                  <div className="col-sm-6 col-12">
                    <p className="h6 mb-0 h6" style={{color:'#1C3041'}}>RMA</p>
                    <p className="h6 text-muted mb-0 small">Total</p>
                    <p className="fw-500">0</p>
                  </div>
                </div>
                
                <div className="row py-1">
                  <div className="col-sm-6 col-12">
                    <p className="h6 mb-0 h6" style={{color:'#89043D'}}>No Call</p>
                    <p className="h6 text-muted mb-0 small">Total</p>
                    <p className="fw-500">489</p>
                  </div>
                </div>
                
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
