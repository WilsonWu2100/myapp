<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BookController extends Controller
{

    public function getAllBooks()
    {
        return view('books', ['books' => Book::all()]);
    }

    public function showBook($id)
    {
        return view('update_book', ['book' => Book::find($id)]);
    }

    public function createBook(Request $request)
    {
        $book = new Book;
        $book->name = $request->input('name');
        $book->image = $request->input('image');
        $book->isbn = $request->input('isbn');
        $book->author = $request->input('author');
        $book->description = $request->input('description');
        $book->category = $request->input('category');
        $book->ratings = $request->input('ratings') ? $request->input('ratings') : 0;
        $book->price = $request->input('price') ? $request->input('price') : 0;
        $book->stock = $request->input('stock') ? $request->input('stock') : 0;
        $book->publisher = $request->input('publisher');
        $book->publication_date = $request->input('publication_date')  ? $request->input('publication_date') : date('Y-m-d');;
        $book->created_at = now();
        $book->updated_at = now();
        $book->save();
        return redirect()->back()->with('message', 'New book has been added successfully!');
    }

    public function updateBook(Request $request, $id)
    {
        $book = Book::find($id);
        $book->name = $request->input('name');
        $book->image = $request->input('image');
        $book->isbn = $request->input('isbn');
        $book->author = $request->input('author');
        $book->description = $request->input('description');
        $book->category = $request->input('category');
        $book->ratings = $request->input('ratings') ? $request->input('ratings') : 0;
        $book->price = $request->input('price') ? $request->input('price') : 0;
        $book->stock = $request->input('stock') ? $request->input('stock') : 0;
        $book->publisher = $request->input('publisher');
        $book->publication_date = $request->input('publication_date')  ? $request->input('publication_date') : date('Y-m-d');;
        $book->updated_at = now();
        $book->update();
        return redirect()->back()->with('message', 'The book has been updated successfully!');
    }

    public function deleteBook($id)
    {
        $book = Book::find($id);
        $book->delete();
        return redirect()->back()->with('message','The book has been deleted successfully!');
    }
}
