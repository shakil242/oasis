import { Link } from '@inertiajs/inertia-react';
import React from 'react';
import RetrievalsVSSalesGraph from './graphs/RetrievalsVSSalesGraph';

export default function RetrievalsVSSales() {
  return (
    <>
      <div className="col-md-6 col-12 my-2">
        <div className="card shadow">
          <div className="card-header">
            <h6 className='mb-0'>Retrievals vs Sales</h6>
          </div>
          <div className="card-body">
            <div className="row">

              <div className="col-md-8 col-12">
                <RetrievalsVSSalesGraph />
              </div>

              <div className="col-md-4 col-12">
                <p className="h6 mb-0 h6" style={{color:'#FF4069'}}>Retrievals</p>
                <p className="h6 text-muted mb-0 small">Total</p>
                <p className="fw-500">6274</p>
                
                <p className="h6 mb-0 h6" style={{color:'#5366cc'}}>Sales</p>
                <p className="h6 text-muted mb-0 small">Total</p>
                <p className="fw-500">3098</p>

              </div>


            </div>
          </div>
        </div>
      </div>
    </>
  )
}
