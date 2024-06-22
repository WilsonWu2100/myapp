<?php

use Database\Seeders\StockSeeder;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('stocks', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('book_id');
            $table->integer('quantity');
            $table->timestamps();
            $table->foreign('book_id')->references('id')->on('books');
        });

        Artisan::call('db:seed', [
            '--class' => StockSeeder::class,
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stocks');
    }
};
