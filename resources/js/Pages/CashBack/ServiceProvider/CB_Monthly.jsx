import React from 'react'
import CB_MonthlyGraph from '../graphs/CB_MonthlyGraph'

export default function CB_Monthly() {
  return (
    <>
      <div className="col-md-6 col-12 my-2">
        <div className="card shadow">
          <div className="card-header">
            <h6 className='mb-0'>December month Chargebacks %(Weekly)</h6>
          </div>
          <div className="card-body">
            <div className="row">

              <div className="col-12">
                <CB_MonthlyGraph />
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
