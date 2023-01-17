import React,{ useState,useMemo } from 'react';
import { CDBDataTable, CDBContainer } from 'cdbreact';

export default function MIDsTable() {

  const [MIDsData, setMIDsData] = useState([{
    mids: 8739299580300093,
    iso: 'Priority-Mx Merchant',
    crm_gtw_name: '72-coolestma',
    cbs: 56,
    sales: 384,
    cb: '14.59%',
  },{
    mids: 8739299580300093,
    iso: 'Priority-Mx Merchant',
    crm_gtw_name: '72-coolestma',
    cbs: 56,
    sales: 384,
    cb: '14.59%',
  },{
    mids: 8739299580300093,
    iso: 'Priority-Mx Merchant',
    crm_gtw_name: '72-coolestma',
    cbs: 56,
    sales: 384,
    cb: '14.59%',
  },{
    mids: 8739299580300093,
    iso: 'Priority-Mx Merchant',
    crm_gtw_name: '72-coolestma',
    cbs: 56,
    sales: 384,
    cb: '14.59%',
  },{
    mids: 8739299580300093,
    iso: 'Priority-Mx Merchant',
    crm_gtw_name: '72-coolestma',
    cbs: 56,
    sales: 384,
    cb: '14.59%',
  },{
    mids: 8739299580300093,
    iso: 'Priority-Mx Merchant',
    crm_gtw_name: '72-coolestma',
    cbs: 56,
    sales: 384,
    cb: '14.59%',
  }]);

      
  const data = () => {
    let sDataTable = {
      columns: [
        {
          label: 'MIDs',
          field: 'mids',
          sort: "asc",
        },
        {
          label: 'ISO',
          field: 'iso',
          sort: "asc",
        },
        {
          label: 'CRM-Gtw Name',
          field: 'crm_gtw_name',
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
          mids: pPost.mids,
          iso: pPost.iso,
          crm_gtw_name: pPost.crm_gtw_name,
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
      <CDBContainer style={{maxHeight: '300px',overflowY: 'auto'}}>
        <CDBDataTable
          bordered
          hover
          data={data()}
          responsive={true}
        />
      </CDBContainer>
    </>
  )
}
