<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StockSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $stocks = [
            [
                'id' => 1,
                'book_id' => 1,
                'quantity' => 100,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 2,
                'book_id' => 2,
                'quantity' => 200,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 3,
                'book_id' => 3,
                'quantity' => 44,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 4,
                'book_id' => 4,
                'quantity' => 55,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 5,
                'book_id' => 5,
                'quantity' => 66,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 6,
                'book_id' => 6,
                'quantity' => 400,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 7,
                'book_id' => 7,
                'quantity' => 700,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 8,
                'book_id' => 8,
                'quantity' => 900,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 9,
                'book_id' => 9,
                'quantity' => 900,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 10,
                'book_id' => 10,
                'quantity' => 900,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 11,
                'book_id' => 11,
                'quantity' => 1500,
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ];

        DB::table('stocks')->insert($stocks);
    }
}
