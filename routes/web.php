<?php

use App\Http\Controllers\BookController;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// List all books.
Route::get('/books', [BookController::class, 'showBooks'])->name('books');
Route::get('/api/books', [BookController::class, 'getAllBooks']);

// View book details.
Route::get('/book/{id}/view', [BookController::class, 'showBook']);

// Add a new book.
Route::get('/book/add', function () {
    return view('add_book');
})->name('books.add');
Route::post('/book/add', [BookController::class, 'createBook']);

// Update a book.
Route::get('/book/{id}/edit', [BookController::class, 'showBook']);
Route::get('/api/book/{id}/edit', [BookController::class, 'getBook']);
Route::post('/book/{id}/edit', [BookController::class, 'updateBook']);

// Delete a book.
Route::delete('/book/{id}/delete', [BookController::class, 'deleteBook'])->name('books.delete');

// Search books.
Route::get('/api/search', [BookController::class, 'searchBook'])->name('books.search');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/api/categories', [App\Http\Controllers\CategoryController::class, 'getAllCategories']);
