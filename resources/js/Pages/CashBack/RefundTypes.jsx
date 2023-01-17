import React from 'react';
import RefundTypesGraphs from './graphs/RefundTypesGraphs';

export default function RefundTypes() {
  return (
    <>
      <div className="col-md-6 col-12 my-2">
        <div className="card shadow">
          <div className="card-header">
            <h6 className='mb-0'>Chargebacks by Refund Types</h6>
          </div>
          <div className="card-body">
            <div className="row">

              <div className="col-12 refundTypes">
                <RefundTypesGraphs />
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
