import React from 'react';
import MIDsTable from './graphs/MIDsTable';

export default function MIDs() {
  return (
    <>
      <div className="col-md-6 col-12 my-2">
        <div className="card shadow">
          <div className="card-header">
            <h6 className='mb-0'>Top 5 High Chargeback MIDs</h6>
          </div>
          <div className="card-body">
            <div className="row">

              <div className="col-12 mids">
                <MIDsTable />
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
