<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body class="books_wrapper">
        <h2>Books Content Management System</h2>
        <p><a href="/add_book">Add New Book</a></p>
        <table id="showBooksInfo" class="table table-bordered">
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
                    <td><a href="/book/{{ $book['id'] }}">Edit</a></td>
                </tr>
            @endforeach
        </table>
    </body>
</html>
