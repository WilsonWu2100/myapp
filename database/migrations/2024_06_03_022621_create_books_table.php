<?php

use Database\Seeders\BookSeeder;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schema;

class CreateBooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('books', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('isbn');
            $table->string('author');
            $table->longText('description');
            $table->string('category');
            $table->integer('ratings');
            $table->float('price');
            $table->integer('stock');
            $table->string('image');
            $table->string('publisher');
            $table->date('publication_date');
            $table->timestamps();
        });

        Artisan::call('db:seed', [
            '--class' => BookSeeder::class,
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('books');
    }
}
