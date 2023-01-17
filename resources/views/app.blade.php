<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'ChargeBack360') }}</title>

        {{-- Icons --}}
        <link rel="stylesheet" href="{{asset('assets/css/all.min.css')}}">

        {{-- Bootstrap css --}}
        <link rel="stylesheet" href="{{asset('assets/css/bootstrap.min.css')}}">
        {{-- theme css --}}
        <link rel="stylesheet" href="{{asset('assets/css/theme.css')}}">
        <!-- Fonts -->
        <link href="https://fonts.bunny.net/css?family=poppins:100,200,300,400,500,600,700,800" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia

        <script src="{{asset('assets/js/bootstrap.min.js')}}"></script>
    </body>
</html>
