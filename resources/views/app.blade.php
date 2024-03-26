<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">


<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Application</title>
    <meta name="theme-color" content="#712cf9">
    {{-- @vite('resources/sass/app.scss') --}}
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet">
    <script src="{{ asset('js/color-modes.js') }}"></script>
    @vite('resources/js/app.js')
</head>

<body>

    <div class="wrapper" id="app">
        <Inicio />

    </div>
    <script src="{{ asset('js/apps.js') }}"></script>


</html>
