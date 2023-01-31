<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ChargeBack360</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="/assets/admin/css/bootstrap.min.css">
    <link rel="stylesheet" href="/assets/admin/css/theme.css">
    <!-- Fonts -->
    <link href="https://fonts.bunny.net/css?family=poppins:100,200,300,400,500,600,700,800" rel="stylesheet" />
</head>

<body>

    <!-- Main Header -->
    @include('admin.layouts.header')
    <!--End Main Header -->

    <!-- Side Bar Start -->
    @include('admin.layouts.sidebar')
    <!-- Side Bar End -->


    <!--Main section Start -->
    <main class="mt-80 mainSection">
        <div class="container-fluid">
            @yield('content')
        </div>
    </main>
    <!--Main section End -->

    <script src="/assets/admin/js/bootstrap.min.js"></script>
    <script src="/assets/admin/js/chart.js"></script>
    <script src="/assets/admin/js/chargBackCharts.js"></script>
</body>

</html>