<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body class="books_wrapper">
        <h2>Books Content Management System</h2>
        <div>
            <div>Name:<span>{{ $book['name'] }}</span></div>
            <div>Image: <span>{{ $book['image'] }}</span></div>
            <div>Isbn: <span>{{ $book['isbn'] }}</span></div>
            <div>Author: <span>{{ $book['author'] }}</span></div>
            <div>Category: <span>{{ $book['category'] }}</span></div>
            <div>Ratings: <span>{{ $book['ratings'] }}</span></div>
            <div>Price: <span>{{ $book['price'] }}</span></div>
            <div>Stock: <span>{{ $book['stock'] }}</span></div>
            <div>Publisher: <span>{{ $book['publisher'] }}</span></div>
            <div>Publication Date: <span>{{ $book['publication_date'] }}</span></div>
        </div>
    </body>
</html>
