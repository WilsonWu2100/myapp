@extends('layout')

@section('content')
        <add-book :message="'{{ session()->has('message') ? session()->get('message') : '' }}'"></add-book>
@endsection

