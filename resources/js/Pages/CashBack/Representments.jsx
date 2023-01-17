import React from 'react';
import RepresentmentsGraph from './graphs/RepresentmentsGraph';

export default function Representments() {
  return (
    <>
      <div className="col-md-6 col-12 my-2">
        <div className="card shadow">
          <div className="card-header">
            <h6 className='mb-0'>Representments</h6>
          </div>
          <div className="card-body">
            <div className="row">

              <div className="col-md-5 col-12">
                <RepresentmentsGraph />
              </div>

              <div className="col-md-7 col-12">
                
                <div className="row py-1">
                  <div className="col-sm-6 col-12">
                    <p className="h6 mb-0 h6" style={{color:'#89043D'}}>Accepted</p>
                    <p className="h6 text-muted mb-0 small">Total</p>
                    <p className="fw-500">228</p>
                  </div>
                  <div className="col-sm-6 col-12">
                    <p className="h6 mb-0 h6" style={{color:'#18F2B2'}}>Insurance</p>
                    <p className="h6 text-muted mb-0 small">Total</p>
                    <p className="fw-500">0</p>
                  </div>
                </div>
                
                <div className="row py-1">
                  <div className="col-sm-6 col-12">
                    <p className="h6 mb-0 h6" style={{color:'red'}}>Loss</p>
                    <p className="h6 text-muted mb-0 small">Total</p>
                    <p className="fw-500">0</p>
                  </div>
                  <div className="col-sm-6 col-12">
                    <p className="h6 mb-0 h6" style={{color:'#3DDC97'}}>Win</p>
                    <p className="h6 text-muted mb-0 small">Total</p>
                    <p className="fw-500">0</p>
                  </div>
                </div>
                
                <div className="row py-1">
                  <div className="col-sm-6 col-12">
                    <p className="h6 mb-0 h6" style={{color:'#1C3041'}}>Unknown</p>
                    <p className="h6 text-muted mb-0 small">Total</p>
                    <p className="fw-500">191</p>
                  </div>
                  <div className="col-sm-6 col-12">
                    <p className="h6 mb-0 h6" style={{color:'#B2ABF2'}}>Pending</p>
                    <p className="h6 text-muted mb-0 small">Total</p>
                    <p className="fw-500">73</p>
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
