@extends('layout')

@section('content')
    <update-book :message="'{{ session()->has('message') ? session()->get('message') : '' }}'"
                  :book="{{ json_encode($book) }}">
    </update-book>
@endsection

