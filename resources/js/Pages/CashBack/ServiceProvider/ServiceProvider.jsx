import React from 'react';
import ReasonCode from './ReasonCode';
import PerformanceMetric from './PerformanceMetric';
import CB_ByProduct from './CB_ByProduct';
import CB_Monthly from './CB_Monthly';

export default function ServiceProvider() {
  return (
    <>

      <ReasonCode />
      <PerformanceMetric />
      <CB_ByProduct />
      <CB_Monthly />
      
    </>
  )
}
