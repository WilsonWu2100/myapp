<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    /**
     * @var string $table
     */
    protected $table = 'books';

    /**
     * @var array $fillable
     */
    protected $fillable = [
        'id',
        'book_name',
        'isbn',
        'author',
        'description',
        'category',
        'ratings',
        'price',
        'stock',
        'image',
        'publisher',
        'publication_date',
    ];
}
