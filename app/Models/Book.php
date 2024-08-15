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
        'name',
        'isbn',
        'author',
        'description',
        'category',
        'ratings',
        'price',
        'image',
        'stock_id',
        'publisher',
        'publication_date',
    ];

    public function stock()
    {
        return $this->hasOne(Stock::class, 'stock_id', 'id');
    }
}
