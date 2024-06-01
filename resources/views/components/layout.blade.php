<!DOCTYPE html>

<title>My blog</title>
<link rel="stylesheet" href="/app.css">

<body>
    <header>
        @yield('banner')
    </header>

    <!--@yield('content')-->
    <!-- $slot is default for component -->
    {{ $slot }}
</body>
