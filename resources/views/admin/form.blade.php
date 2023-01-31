@extends('admin/layouts/default')
@section('title', 'Form')
@section('content')
@if($message = Session::get('success'))
<div class="alert alert-danger">
{{ $message }}
</div>
@endif
<h2 class="text-center pt-3">Chargeback</h2>
<form action="{{url('api/form-processing')}}" method="POST">
  @csrf
    <div class="mb-3">
      <label for="exampleInputId" class="form-label">Order ID</label>
      <input type="text" name="order_id" class="form-control" id="exampleInputId" aria-describedby="emailHelp">
      <span class="text-danger">
        @if ($errors->has('order_id'))
            {{$errors->first('order_id')}}
        @endif
    </span>
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email Optional</label>
      <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
      <label for="exampleInputDescription" class="form-label">Reason</label>
      <textarea id="exampleInputDescription" class="form-control" name="description" rows="3"></textarea>
      <span class="text-danger">
        @if ($errors->has('description'))
            {{$errors->first('description')}}
        @endif
    </span>
    </div>
    <div class="mb-3">
        <select name="request_type" class="form-select" aria-label=".form-select-sm example">
            <option value="">Select Option</option>
            <option value="1">All</option>
            <option value="2">Refund Order</option>
            <option value="3">Cancel Order</option>
            <option value="4">Blacklist Order</option>
          </select>
          <span class="text-danger">
            @if ($errors->has('request_type'))
                {{$errors->first('request_type')}}
            @endif
        </span>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  @endsection