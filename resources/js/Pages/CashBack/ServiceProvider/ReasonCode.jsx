import React from 'react'
import ReasonCodeGraph from '../graphs/ReasonCodeGraph'

export default function ReasonCode() {
  return (
    <>
      <div className="col-md-6 col-12 my-2">
        <div className="card shadow">
          <div className="card-header">
            <h6 className='mb-0'>Chargebacks by Reason Codes</h6>
          </div>
          <div className="card-body">
            <div className="row">

              <div className="col-12">
                <ReasonCodeGraph />
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
