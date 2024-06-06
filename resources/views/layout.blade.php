<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="//code.jquery.com/ui/1.11.2/themes/smoothness/jquery-ui.css">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet" type="text/css">
        <script src="https://code.jquery.com/jquery-3.7.1.js"></script>
        <script src="https://code.jquery.com/ui/1.13.3/jquery-ui.js"></script>
        <script src="{{ asset('js/main.js') }}" type="text/javascript"></script>

        <!-- Scripts -->
        <script src="{{ asset('js/app.js') }}" defer></script>
    </head>
    <body>
        <div id="app">
            <div class="container">
                <h2>Books Content Management System</h2>
                <nav class="navbar bg-body-tertiary">
                    <div class="container-fluid">
                    <span class="navbar-brand">
                        <a href="/books">Home</a>
                    </span>
                    </div>
                </nav>
                @yield('content')
            </div>
        </div>
    </body>
</html>
