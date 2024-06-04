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

Route::get('/books', [BookController::class, 'getAllBooks']);

Route::get('/book/{id}', [BookController::class, 'showBook']);

Route::get('/add_book', function () {
    return view('add_book');
})->name('add_book');

Route::post('/add_book', [BookController::class, 'createBook']);
