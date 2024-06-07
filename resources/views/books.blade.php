@extends('layout')

@section('content')
    <div>
        <books :search-route="'{{ route('books.search') }}'"
               :message="'{{ session()->has('message') ? session()->get('message') : '' }}'"
               :search="'{{!empty(app('request')->input('search')) ? app('request')->input('search') : '' }}'"
               :books="{{ json_encode($books) }}">
        </books>

        {{-- Pagination --}}
        <div class="d-flex justify-content-center mt-4">
            {!! $books->links() !!}
        </div>
    </div>
@endsection

