@extends('layout')

@section('content')
    <div>
        <h2>Books Content Management System</h2>
        <p><a href="/book/add"><button class="button add_new_book">Add New Book</button></a></p>
        <p>
            <form action="{{ route('books.search') }}" method="GET">
                <input type="text" name="search" placeholder="Search books" class="search">
                <button type="submit" class="button">Search</button>
            </form>
        </p>
        <table id="bookTable">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Book Name</th>
                    <th>ISBN</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Ratings</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Publisher</th>
                    <th>Publication Date</th>
                    <th>Operations</th>
                </tr>
            </thead>
            @foreach($books as $book)
                <tr>
                    <td>{{ $book['id'] }}</td>
                    <td>{{ $book['image'] }}</td>
                    <td>{{ $book['name'] }}</td>
                    <td>{{ $book['isbn'] }}</td>
                    <td>{{ $book['author'] }}</td>
                    <td>{{ $book['category'] }}</td>
                    <td>{{ $book['ratings'] }}</td>
                    <td>{{ $book['price'] }}</td>
                    <td>{{ $book['stock'] }}</td>
                    <td>{{ $book['publisher'] }}</td>
                    <td>{{ $book['publication_date'] }}</td>
                    <td>
                        <div class="operation">
                            <div>
                                <a href="/book/{{ $book['id'] }}/edit">
                                    <button class="button">Edit</button>
                                </a>
                            </div>
                            <div>
                                <form action="/book/{{ $book['id'] }}/delete" method="post">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="button">Delete</button>
                                </form>
                            </div>
                        </div>
                    </td>
                </tr>
            @endforeach
        </table>
    </div>
@endsection
