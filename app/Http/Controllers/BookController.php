<?php

namespace App\Http\Controllers;

use App\Models\Book;
use DateTime;
use DateTimeZone;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class BookController extends Controller
{
    public function getAllBooks()
    {
        return view('books', [
            'books' => Book::with('stock')->paginate(10)
        ]);
    }

    public function showBook($id)
    {
        return view('update_book');
    }

    public function getBook($id)
    {
        $book = Book::find($id);
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
        $message = ['message' => 'New book has been added successfully!'];
        return response()->json($message);
    }

    /**
     * Update a book by id.
     * @param Request $request
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
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

    public function searchBook(Request $request)
    {
        $search = $request->input('search');
        $results = Book::where('name', 'like', "%$search%")
            ->orWhere('author', 'like', "%$search%")
            ->orWhere('category', 'like', "%$search%")
            ->orWhere('publisher', 'like', "%$search%")
            ->paginate(10);
        return view('books', ['books' => $results]);
    }
}
