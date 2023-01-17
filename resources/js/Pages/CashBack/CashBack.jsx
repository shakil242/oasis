import React from 'react'
import ChargebacksVsSales from './ChargebacksVsSales';
import Representments from './Representments';
import BillingCycle from './BillingCycle';
import MIDs from './MIDs';
import RefundTypes from './RefundTypes';
import RetrievalsVSSales from './RetrievalsVSSales';
import ChargebacksBank from './ChargebacksBank/ChargebacksBank';
import ServiceProvider from './ServiceProvider/ServiceProvider';

export default function CashBack() {
  return (
    <>
      {/*Main section Start */}
      <main className="mt-80 mainSection">
        <div className="container-fluid">
          <div className="row cashBack">
            <h4 className="text-muted text-center my-3">CashBack</h4>
            
            <ChargebacksVsSales />
            <Representments />
            <BillingCycle />
            <MIDs />
            <RefundTypes />
            <RetrievalsVSSales />

            <h4 className="text-muted text-center my-3">Chargebacks by Bank</h4>
            <ChargebacksBank />

            <h4 className="text-muted text-center my-3">Chargebacks by Service Providers</h4>
            <ServiceProvider />


          </div>
        </div>
      </main>
      {/*Main section End */}
    </>
  )
}
