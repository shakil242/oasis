@extends('admin/layouts/default')
@section('title', 'Dashboard')
@section('content')
<div class="row">
    <h4 class="text-muted text-center my-3">CashBack</h4>
    <div class="col-md-6 col-12 my-2">
        <div class="card shadow">
            <div class="card-header">
                <h6 class='mb-0'>Chargebacks Vs Sales</h6>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-5 col-12">
                        <canvas id="chargBackVSSale"></canvas>
                        <p class="sale_charg text-center">Sales converted to Chargebacks</p>
                    </div>
                    <div class="col-md-7 col-12">
                        <div class="row borderB--lightGray-1 py-2">
                        <div class="col-12">
                            <p class='text-primary mb-0 small'>Chargebacks</p>
                        </div>
                        <div class="col-sm-5 col-12">
                            <p class="h6 text-muted mb-0 small">Total CBs</p>
                            <p class="fw-500">492 &nbsp;|&nbsp; 8.15%</p>
                        </div>
                        <div class="col-sm-7 col-12">
                            <p class="h6 text-muted mb-0 small">CBs Amount</p>
                            <p class="fw-500">$27,731.55 &nbsp;|&nbsp; 11.15%</p>
                        </div>
                        </div>
                        <div class="row borderB--lightGray-1 py-2">
                        <div class="col-12">
                            <a href="" class='text-primary small'>CBs Vs Date Range Sales</a>
                        </div>
                        <div class="col-sm-5 col-12">
                            <p class="h6 text-muted mb-0 small">Total CBs</p>
                            <p class="fw-500">44 &nbsp;|&nbsp; 0.73%</p>
                        </div>
                        <div class="col-sm-7 col-12 d-flex flex-column justify-content-end">
                            <p class="h6 text-muted mb-0 small">CBs Amount</p>
                            <p class="fw-500">$2,634.37 &nbsp;|&nbsp; 5.15%</p>
                        </div>
                        </div>
                        <div class="row py-2">
                        <div class="col-12">
                            <p class='text-primary mb-0 small'>Chargebacks</p>
                        </div>
                        <div class="col-sm-5 col-12">
                            <p class="h6 text-muted mb-0 small">Total CBs</p>
                            <p class="fw-500">492 &nbsp;|&nbsp; 8.15%</p>
                        </div>
                        <div class="col-sm-7 col-12">
                            <p class="h6 text-muted mb-0 small">CBs Amount</p>
                            <p class="fw-500">$27,731.55 &nbsp;|&nbsp; 11.15%</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-6 col-12 my-2">
        <div class="card shadow">
            <div class="card-header">
                <h6 class='mb-0'>Representments</h6>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-5 col-12">
                        <canvas id="representments"></canvas>
                    </div>
                    <div class="col-md-7 col-12">
                        <div class="row py-1">
                            <div class="col-sm-6 col-12">
                                <p class="h6 mb-0 h6" style="color:#89043D">Accepted</p>
                                <p class="h6 text-muted mb-0 small">Total</p>
                                <p class="fw-500">228</p>
                            </div>
                            <div class="col-sm-6 col-12">
                                <p class="h6 mb-0 h6" style="color:#18F2B2">Insurance</p>
                                <p class="h6 text-muted mb-0 small">Total</p>
                                <p class="fw-500">0</p>
                            </div>
                        </div>
                        <div class="row py-1">
                            <div class="col-sm-6 col-12">
                                <p class="h6 mb-0 h6" style="color:red">Loss</p>
                                <p class="h6 text-muted mb-0 small">Total</p>
                                <p class="fw-500">0</p>
                            </div>
                            <div class="col-sm-6 col-12">
                                <p class="h6 mb-0 h6" style="color:#3DDC97">Win</p>
                                <p class="h6 text-muted mb-0 small">Total</p>
                                <p class="fw-500">0</p>
                            </div>
                        </div>
                        <div class="row py-1">
                            <div class="col-sm-6 col-12">
                                <p class="h6 mb-0 h6" style="color:#1C3041">Unknown</p>
                                <p class="h6 text-muted mb-0 small">Total</p>
                                <p class="fw-500">191</p>
                            </div>
                            <div class="col-sm-6 col-12">
                                <p class="h6 mb-0 h6" style="color:#B2ABF2">Pending</p>
                                <p class="h6 text-muted mb-0 small">Total</p>
                                <p class="fw-500">73</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div class="col-md-6 col-12 my-2">
        <div class="card shadow">
          <div class="card-header">
            <h6 class='mb-0'>Chargebacks by Billing Cycle</h6>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-12">
                <canvas id="BillingCycleGraph"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-12 my-2">
        <div class="card shadow">
          <div class="card-header">
            <h6 class='mb-0'>Top 5 High Chargeback MIDs</h6>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-12 mids">
                <table class="sc-hBxehG table table-bordered table-hover dataTable">
                    <thead data-test="datatable-head">
                        <tr>
                            <th class="sorting">MIDs</th>
                            <th class="sorting">ISO</th>
                            <th class="sorting">CRM-Gtw Name</th>
                            <th class="sorting">CBs</th>
                            <th class="sorting">Sales</th>
                            <th class="sorting">CB %</th>
                        </tr>
                    </thead>
                    <tbody data-test="table-body">
                        <tr>
                            <td>8739299580300093</td>
                            <td>Priority-Mx Merchant</td>
                            <td>72-coolestma</td>
                            <td>56</td>
                            <td>384</td>
                            <td>14.59%</td>
                        </tr>
                        <tr>
                            <td>8739299580300093</td>
                            <td>Priority-Mx Merchant</td>
                            <td>72-coolestma</td>
                            <td>56</td>
                            <td>384</td>
                            <td>14.59%</td>
                        </tr>
                        <tr>
                            <td>8739299580300093</td>
                            <td>Priority-Mx Merchant</td>
                            <td>72-coolestma</td>
                            <td>56</td>
                            <td>384</td>
                            <td>14.59%</td>
                        </tr>
                        <tr>
                            <td>8739299580300093</td>
                            <td>Priority-Mx Merchant</td>
                            <td>72-coolestma</td>
                            <td>56</td>
                            <td>384</td>
                            <td>14.59%</td>
                        </tr>
                        <tr>
                            <td>8739299580300093</td>
                            <td>Priority-Mx Merchant</td>
                            <td>72-coolestma</td>
                            <td>56</td>
                            <td>384</td>
                            <td>14.59%</td>
                        </tr>
                        <tr>
                            <td>8739299580300093</td>
                            <td>Priority-Mx Merchant</td>
                            <td>72-coolestma</td>
                            <td>56</td>
                            <td>384</td>
                            <td>14.59%</td>
                        </tr>
                    </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div class="col-md-6 col-12 my-2">
        <div class="card shadow">
            <div class="card-header">
                <h6 class='mb-0'>Chargebacks by Refund Types</h6>
            </div>
            <div class="card-body">
                <div class="row justify-content-lg-center">
                    <div class="brd-right col-sm-4 col-xl-4">
                        <div class="">
                            <div class="justify-content-center row">
                                <div class="col-3 col-md-2 col-lg-2 col-xl-2 p-relative">
                                    <h6 class="refund-type aview-title">Full <br>Refund</h6>
                                </div>
                            </div>
                            <div class="text-center">
                                <canvas class="" id="RefundTypesGraphs" width="150%" height="100%"></canvas>
                            </div>
                            <div class="justify-content-center row">
                                <div class="col-9 pr-sm-0 col-sm-8 col-md-7 col-lg-6 col-xl-9">
                                    <div class="am-tot-24 am-tot-align">
                                        <div class="amount-total">
                                            <div class="t-value">
                                                <p class="mb-0 gray-color sm-font">Total</p>
                                                <h6 class="float-left ">112 </h6>
                                                <span class="mx-2">|</span><span>16.54%</span>
                                            </div>
                                            <div class="t-24hours"></div>
                                            <div class="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="brd-right col-sm-4 col-xl-4">
                        <div class="">
                            <div class="justify-content-center row">
                                <div class="col-3 col-md-2 col-lg-2 col-xl-2 p-relative">
                                    <h6 class="refund-type partial-color aview-title">Partial <br>Refund</h6>
                                </div>
                            </div>
                            <div class="text-center">
                                <canvas class="" id="PartialRefund" width="150%" height="100%"></canvas>
                            </div>
                            <div class="justify-content-center row">
                                <div class="col-9 pr-sm-0 col-sm-8 col-md-7 col-lg-6 col-xl-9">
                                    <div class="am-tot-24 am-tot-align">
                                        <div class="amount-total">
                                            <div class="t-value">
                                                <p class="mb-0 gray-color sm-font">Total</p>
                                                <h6 class="float-left ">26 </h6>
                                                <span class="mx-2">|</span><span>3.84%</span>
                                            </div>
                                            <div class="t-24hours"></div>
                                            <div class="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 col-xl-4">
                        <div class="">
                            <div class="justify-content-center row">
                                <div class="col-3 col-md-2 col-lg-2 col-xl-2 p-relative">
                                    <h6 class="refund-type no-refund-color aview-title">No <br> Refund</h6>
                                </div>
                            </div>
                            <div class="text-center">
                                <canvas class="" id="NoRefund" width="150%" height="100%"></canvas>
                            </div>
                            <div class="justify-content-center row">
                                <div class="col-9 pr-sm-0 col-sm-8 col-md-7 col-lg-6 col-xl-9">
                                    <div class="am-tot-24 am-tot-align">
                                        <div class="amount-total">
                                            <div class="t-value">
                                                <p class="mb-0 gray-color sm-font">Total</p>
                                                <h6 class="float-left ">539 </h6>
                                                <span class="mx-2">|</span><span>79.62%</span>
                                            </div>
                                            <div class="t-24hours"></div>
                                            <div class="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-6 col-12 my-2">
        <div class="card shadow">
            <div class="card-header">
                <h6 class='mb-0'>Retrievals vs Sales</h6>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-8 col-12">
                        <canvas id="Retrievals"></canvas>
                    </div>
                     <div class="col-md-4 col-12">
                        <p class="h6 mb-0 h6" style="color:#FF4069">Retrievals</p>
                        <p class="h6 text-muted mb-0 small">Total</p>
                        <p class="fw-500">6274</p>
                        <p class="h6 mb-0 h6" style="color:#5366cc">Sales</p>
                        <p class="h6 text-muted mb-0 small">Total</p>
                        <p class="fw-500">3098</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection