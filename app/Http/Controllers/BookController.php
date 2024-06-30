<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Stock;
use DateTime;
use DateTimeZone;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function showBooks()
    {
        return view('books');
    }

    public function getAllBooks()
    {
        $books = Book::with('stock')->paginate(10);
        return response()->json($books);
    }

    public function showBook($id)
    {
        return view('update_book');
    }

    public function getBook($id)
    {
        $book = Book::with('stock')->find($id);
        return response()->json($book);
    }

    /**
     * Create a new book.
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function createBook(Request $request)
    {
        $book = new Book;

        // Upload image and save to public/images/ folder
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $file_name = pathinfo($image->getClientOriginalName(), PATHINFO_FILENAME);
            $extension = $image->getClientOriginalExtension();
            $file_name_to_store = $file_name . '_' . time() . '.' . $extension;
            $book->image = $file_name_to_store;
            $image->move(public_path('images'), $file_name_to_store);
        } else {
            $book->image = 'no_image.jpg';
        }

        // Format the publication date.
        $dateTime = $request->input('publication_date');
        $dateString = rtrim(preg_replace('/\(.*\)/', '', $dateTime));
        $dateTime = DateTime::createFromFormat('D M d Y H:i:s e', $dateString);
        $book->publication_date = $request->input('publication_date')  ? $dateTime->format('Y-m-d') : '';

        $book->name = $request->input('name');
        $book->isbn = $request->input('isbn');
        $book->author = $request->input('author');
        $book->description = $request->input('description');
        $book->category = $request->input('category');
        $book->ratings = $request->input('ratings') ? $request->input('ratings') : 0;
        $book->price = $request->input('price') ? $request->input('price') : 0;
        $book->publisher = $request->input('publisher');
        $book->created_at = now();
        $book->updated_at = now();
        $book->save();

        $stock = new Stock;
        $stock->book_id = $book->id;
        $stock->quantity = $request->input('stock') ? $request->input('stock') : 0;;
        $stock->created_at = now();
        $stock->updated_at = now();
        $stock->save();

        $message = ['message' => 'New book has been added successfully!'];
        return response()->json($message);
    }

    /**
     * Update a book by id.
     * @param Request $request
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function updateBook(Request $request, $id)
    {
        $book = Book::find($id);

        // Upload image and save to public/images/ folder
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $file_name = pathinfo($image->getClientOriginalName(), PATHINFO_FILENAME);
            $extension = $image->getClientOriginalExtension();
            $file_name_to_store = $file_name . '_' . time() . '.' . $extension;
            $book->image = $file_name_to_store;
            $image->move(public_path('images'), $file_name_to_store);
        }

        $utcDateTime = $request->input('publication_date');
        $dateTime = new DateTime($utcDateTime);
        $timezone = new DateTimeZone('Australia/Sydney');
        $dateTime->setTimezone($timezone);
        $book->publication_date = $request->input('publication_date')  ? $dateTime->format('Y-m-d') : '';

        $book->name = $request->input('name');
        $book->isbn = $request->input('isbn');
        $book->author = $request->input('author');
        $book->description = $request->input('description');
        $book->category = $request->input('category');
        $book->ratings = $request->input('ratings') ? $request->input('ratings') : 0;
        $book->price = $request->input('price') ? $request->input('price') : 0;
        $book->publisher = $request->input('publisher');
        $book->updated_at = now();
        $book->update();

        $stock = Stock::where('book_id', $id)->first();
        $stock->quantity = $request->input('stock') ? $request->input('stock') : 0;
        $stock->update();

        $message = ['message' => 'The book has been updated successfully!'];
        return response()->json($message);
    }

    /**
     * Delete a book by id.
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function deleteBook($id)
    {
        $book = Book::find($id);
        $book->delete();
        $message = ['message' => 'The book has been deleted successfully!'];
        return response()->json($message);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function searchBook(Request $request)
    {
        $search = $request->input('search');
        $results = Book::with('stock')->where('name', 'like', "%$search%")
            ->orWhere('author', 'like', "%$search%")
            ->orWhere('category', 'like', "%$search%")
            ->orWhere('publisher', 'like', "%$search%")
            ->paginate(10);
        return response()->json($results);
    }
}
