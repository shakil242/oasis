import React from 'react';
import ChargebackBINsGraph from '../graphs/ChargebackBINsGraph';
import CardType from '../ChargebacksBank/CardType';

export default function ChargebacksBank() {
  return (
    <>

      <div className="col-md-6 col-12 my-2">
        <div className="card shadow">
          <div className="card-header">
            <h6 className='mb-0'>Top 5 High Chargeback BINs</h6>
          </div>
          <div className="card-body">
            <div className="row">

              <div className="col-12">
                <ChargebackBINsGraph />
              </div>

            </div>
          </div>
        </div>
      </div>

      
      <CardType />
      
    </>
  )
}
