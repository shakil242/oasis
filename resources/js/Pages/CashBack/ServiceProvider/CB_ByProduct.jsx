import React,{ useState,useMemo } from 'react';
import { CDBDataTable, CDBContainer } from 'cdbreact';

export default function CB_ByProduct() {

  
  const [MIDsData, setMIDsData] = useState([{
    product_id: 1039,
    product_name: 'ProSound Pods (R)',
    sales: '72-coolestma',
    cbs: 56,
    sales: 543,
    cb: '14.59%',
  },{
    product_id: 1039,
    product_name: 'ProSound Pods (R)',
    sales: '72-coolestma',
    cbs: 56,
    sales: 544,
    cb: '14.59%',
  },{
    product_id: 1040,
    product_name: 'ProSound Pods (R)',
    sales: '72-coolestma',
    cbs: 56,
    sales: 545,
    cb: '14.59%',
  },{
    product_id: 1041,
    product_name: 'ProSound Pods (R)',
    sales: '72-coolestma',
    cbs: 56,
    sales: 546,
    cb: '14.59%',
  },{
    product_id: 1042,
    product_name: 'ProSound Pods (R)',
    sales: '72-coolestma',
    cbs: 56,
    sales: 543,
    cb: '14.59%',
  },{
    product_id: 1043,
    product_name: 'ProSound Pods (R)',
    sales: '72-coolestma',
    cbs: 56,
    sales: 547,
    cb: '14.59%',
  }]);

      
  const data = () => {
    let sDataTable = {
      columns: [
        {
          label: 'Product Id',
          field: 'product_id',
          sort: "asc",
        },
        {
          label: 'Product Name',
          field: 'product_name',
          sort: "asc",
        },
        {
          label: 'CBs',
          field: 'cbs',
          sort: "asc",
        },
        {
          label: 'Sales',
          field: 'sales',
          sort: "asc",
        },
        {
          label: 'CB %',
          field: 'cb',
          sort: "asc",
        }
      ],
      rows: [],    
    };
    function createRow(){
      MIDsData.forEach((pPost,i) => {
        sDataTable.rows.push({
          product_id: pPost.product_id,
          product_name: pPost.product_name,
          sales: pPost.sales,
          cbs: pPost.cbs,
          sales: pPost.sales,
          cb: pPost.cb,
        })
      });
    }
    var returnData = useMemo(() => {
        createRow()
        return sDataTable
      }, [MIDsData]);
    return returnData;
  };


  return (
    <>
      <div className="col-md-6 col-12 my-2">
        <div className="card shadow">
          <div className="card-header">
            <h6 className='mb-0'>Chargebacks by Product</h6>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-12 CBProducts">
                <CDBContainer style={{maxHeight: '300px',overflowY: 'auto'}}>
                  <CDBDataTable
                    bordered
                    hover
                    data={data()}
                    responsive={true}
                  />
                </CDBContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}
