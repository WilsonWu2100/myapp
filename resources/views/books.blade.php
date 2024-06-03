<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body class="books_wrapper">
        <h2>Books Content Management System</h2>
        <table id="showBooksInfo" class="table table-bordered">
            <thead>
                <tr>
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
                </tr>
            </thead>
            @foreach($books as $book)
                <tr>
                    <td>{{$book['image']}}</td>
                    <td>{{$book['name']}}</td>
                    <td>{{$book['isbn']}}</td>
                    <td>{{$book['author']}}</td>
                    <td>{{$book['category']}}</td>
                    <td>{{$book['ratings']}}</td>
                    <td>{{$book['price']}}</td>
                    <td>{{$book['stock']}}</td>
                    <td>{{$book['publisher']}}</td>
                    <td>{{$book['publication_date']}}</td>
                </tr>
            @endforeach
        </table>
    </body>
</html>
