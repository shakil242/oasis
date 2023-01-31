<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Orders;
use Illuminate\Support\Facades\Validator;

class ApiController extends Controller
{
    public function apiForm()
    {
        return view('admin.form');
    }
    public function form_processing(Request $request)
    {
        $response = [];
        // if($request->request_type == 1){
            // array_push($response,refund_order($request->all()));
            // array_push($response,cancel_order($request->all()));
            // array_push($response,blacklist_order($request->all()));
        //  }
        // if($request->request_type == 2){
        //     $response = refund_order($request->all());
        //  }
        if($request->request_type == 3){
            
            if(cancel_order($request->all())->result === 'SUCCESS'){
                $response = cancel_order($request->all());
               
            }else{
                return redirect('api/create')->with('success', 'Please Enter Correct Data into form');
            }
          
        }
        // if($request->request_type == 4){
        //     $response = blacklist_order($request->all());
        // }
        $validator = Validator::make($request->all(), [
            'order_id' => 'required',
            'description' => 'required',
            'request_type' => 'required'
            
        ]);
        if ($validator->fails()) {
            return redirect('api/create')
                ->withErrors($validator)
                ->withInput();
        }
        
        $data = [
            'order_id' => $request->order_id,
            'description' => $request->description,
            'request_type' => $request->request_type,
            'response' => json_encode($response),
        ];
        $order = Orders::insert($data);
    }
}
