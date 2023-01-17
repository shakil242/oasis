<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CashBackController extends Controller
{
    public function cashBackView()
    {
        return Inertia::render('Dashboard', [
            "component" => 'CashBack'
        ]);
    }
}
