<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            [
                'id' => 1,
                'name' => 'Language',
            ],
            [
                'id' => 2,
                'name' => 'Learning',
            ],
            [
                'id' => 3,
                'name' => 'Programming',
            ],
            [
                'id' => 4,
                'name' => 'Science Fiction',
            ],
            [
                'id' => 5,
                'name' => 'Detective Story',
            ],
            [
                'id' => 6,
                'name' => 'Other',
            ]
        ];

        DB::table('categories')->insert($categories);
    }
}
