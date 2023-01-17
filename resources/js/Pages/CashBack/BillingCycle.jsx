import { Link } from '@inertiajs/inertia-react';
import React from 'react';
import BillingCycleGraph from './graphs/BillingCycleGraph';

export default function BillingCycle() {
  return (
    <>
      <div className="col-md-6 col-12 my-2">
        <div className="card shadow">
          <div className="card-header">
            <h6 className='mb-0'>Chargebacks by Billing Cycle</h6>
          </div>
          <div className="card-body">
            <div className="row">

              <div className="col-12">
                <BillingCycleGraph />
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
