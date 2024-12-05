<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stock extends Model
{
    use HasFactory;

    /**
     * @var string $table
     */
    protected $table = 'stocks';

    /**
     * @var array $fillable
     */
    protected $fillable = [
        'quantity'
    ];

    public function book()
    {
        return $this->belongsTo(Book::class, 'stock_id', 'id');
    }
}
