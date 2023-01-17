import React from 'react';
import CardTypeGraph from '../graphs/CardTypeGraph';

export default function CardType() {
  return (
    <>
      <div className="col-md-6 col-12 my-2">
        <div className="card shadow">
          <div className="card-header">
            <h6 className='mb-0'>Chargebacks by Card Types</h6>
          </div>
          <div className="card-body">
            <div className="row">

              <div className="col-md-5 col-12">
                <CardTypeGraph />
              </div>

              <div className="col-md-7 col-12">
                
                <div className="row py-1">
                  <div className="col-sm-6 col-12">
                    <p className="h6 mb-0 h6" style={{color:'#5366cc'}}>Master Card</p>
                    <p className="h6 text-muted mb-0 small">Total</p>
                    <p className="fw-500">32</p>
                  </div>
                  <div className="col-sm-6 col-12">
                    <p className="h6 mb-0 h6" style={{color:'#FF4069'}}>Visa Card</p>
                    <p className="h6 text-muted mb-0 small">Total</p>
                    <p className="fw-500">14</p>
                  </div>
                </div>
                
                <div className="row py-1">
                  <div className="col-sm-6 col-12">
                    <p className="h6 mb-0 h6" style={{color:'green'}}>Discover Card</p>
                    <p className="h6 text-muted mb-0 small">Total</p>
                    <p className="fw-500">33</p>
                  </div>
                  <div className="col-sm-6 col-12">
                    <p className="h6 mb-0 h6" style={{color:'#112B43'}}>Amex Card</p>
                    <p className="h6 text-muted mb-0 small">Total</p>
                    <p className="fw-500">0</p>
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
