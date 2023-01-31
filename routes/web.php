<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::middleware(['admin'])->group(function () {
    Route::controller(DashboardController::class)->group(function () {
        Route::get('dashboard', 'dashboard')->name('admin.dashboard');
    });
});
Route::controller(ApiController::class)->name('api.')->group(function () {
    Route::get('api/create', 'apiForm')->name('create');
    Route::post('api/form-processing', 'form_processing')->name('form_processing');
});
Route::get('/', function () {
    return view('admin.index');
});
