@extends('layout')

@section('content')
    <books :search-route="'{{ route('books.search') }}'"
           :search="'{{!empty(app('request')->input('search')) ? app('request')->input('search') : '' }}'"
           :books="{{ json_encode($books) }}">
    </books>
@endsection

