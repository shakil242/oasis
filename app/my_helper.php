<?php
function cancel_order($cancel_data){
    $cancel_order_data = array(
        'cancelReason' => $cancel_data['description'],
        'loginId' => config('constants.options.loginId'),
        'password' => config('constants.options.password'),
        'orderId' => $cancel_data['order_id']
    );

    $url = 'https://api.konnektive.com/order/cancel/';

    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_URL => $url,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POSTFIELDS => $cancel_order_data,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'POST',
    ));

    $response = curl_exec($curl);
    curl_close($curl);
    return json_decode($response);
}
?>