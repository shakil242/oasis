import { Link } from '@inertiajs/inertia-react';
import React from 'react';
import ChargebacksVsSalesGraph from './graphs/ChargebacksVsSalesGraph';

export default function ChargebacksVsSales() {
  return (
    <>
      <div className="col-md-6 col-12 my-2">
        <div className="card shadow">
          <div className="card-header">
            <h6 className='mb-0'>Chargebacks Vs Sales</h6>
          </div>
          <div className="card-body">
            <div className="row">

              <div className="col-md-5 col-12">
                <ChargebacksVsSalesGraph />
              </div>

              <div className="col-md-7 col-12">
                
                <div className="row borderB--lightGray-1 py-2">
                  <div className="col-12">
                    <p className='text-primary mb-0 small'>Chargebacks</p>
                  </div>
                  <div className="col-sm-5 col-12">
                    <p className="h6 text-muted mb-0 small">Total CBs</p>
                    <p className="fw-500">492 &nbsp;|&nbsp; 8.15%</p>
                  </div>
                  <div className="col-sm-7 col-12">
                    <p className="h6 text-muted mb-0 small">CBs Amount</p>
                    <p className="fw-500">$27,731.55 &nbsp;|&nbsp; 11.15%</p>
                  </div>
                </div>

                <div className="row borderB--lightGray-1 py-2">
                  <div className="col-12">
                    <Link href="" className='text-primary small'>CBs Vs Date Range Sales</Link>
                  </div>
                  <div className="col-sm-5 col-12">
                    <p className="h6 text-muted mb-0 small">Total CBs</p>
                    <p className="fw-500">44 &nbsp;|&nbsp; 0.73%</p>
                  </div>
                  <div className="col-sm-7 col-12 d-flex flex-column justify-content-end">
                    <p className="h6 text-muted mb-0 small">CBs Amount</p>
                    <p className="fw-500">$2,634.37 &nbsp;|&nbsp; 5.15%</p>
                  </div>
                </div>

                <div className="row py-2">
                  <div className="col-12">
                    <p className='text-primary mb-0 small'>Chargebacks</p>
                  </div>
                  <div className="col-sm-5 col-12">
                    <p className="h6 text-muted mb-0 small">Total CBs</p>
                    <p className="fw-500">492 &nbsp;|&nbsp; 8.15%</p>
                  </div>
                  <div className="col-sm-7 col-12">
                    <p className="h6 text-muted mb-0 small">CBs Amount</p>
                    <p className="fw-500">$27,731.55 &nbsp;|&nbsp; 11.15%</p>
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
