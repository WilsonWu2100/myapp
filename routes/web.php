<?php

use App\Models\Post;
use App\Models\Test;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Route;
use Spatie\YamlFrontMatter\YamlFrontMatter;

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

/*Route::get('/', function () {
    return view('posts');
});*/

/*Route::get('/post', function () {
    return view('post', [
        'post' => '<h1>Hello World</h1>'
    ]);
});*/

//Wildcard is {post}, it looks for whatever is passed to the function, in this case, it's $slug
/*Route::get('posts/{post}', function ($slug) {
    $path = __DIR__ . "/../resources/posts/{$slug}.html";

    if (!file_exists($path)) {
        return redirect('/');
        //ddd('file does not exist');
    }

    // Get the content and store in cache for 10 seconds
    // Cache::remember(key, duration, closure)
    // The Cache::remember() method accepts three parameters, a key, seconds, and closure used to retrieve data from the database if not found
    //$post = cache()->remember("posts.{$slug}", 10, function () use ($path) {
    //    var_dump('file_get_contents');
    //    return file_get_contents($path);
    //});
    $post = cache()->remember("posts.{$slug}", 10, fn() => file_get_contents($path));

    return view('post', [
        'post' => $post
    ]);
})->where('post', '[A-z_\-]+');*/

/*Route::get('/', function () {
    $posts = Post::all();
    ddd($posts);
    return view('posts', [
        'posts' => $posts
    ]);
});*/

/*Route::get('/', function () {
    return view('posts', [
        'posts' => Post::all()
    ]);
});*/

/*Route::get('/', function () {
    $document = YamlFrontMatter::parseFile(
        resource_path('posts/my-fourth-post.html')
    );

    ddd($document->matter('date'));
});*/

/*Route::get('/', function () {
    $files = File::files(resource_path("posts"));
    $documents = [];

    foreach ($files as $file) {
        $documents[] = YamlFrontMatter::parseFile($file);
    }

    ddd($documents);
});*/

/*Route::get('/', function () {
    $files = File::files(resource_path("posts"));
    $posts = [];

    foreach ($files as $file) {
        $document = YamlFrontMatter::parseFile($file);

        $posts[] = new Post (
            $document->title,
            $document->excerpt,
            $document->date,
            $document->body(),
            $document->slug
        );
    }

    return view('posts', [
        'posts' => $posts
    ]);
});*/

/*Route::get('/', function () {
    //Using Laravel collection, collect()->
    $posts = collect(File::files(resource_path("posts")))
        ->map(function ($file) {
          return YamlFrontMatter::parseFile($file);
        })
        ->map(function ($document) {
        return new Post (
            $document->title,
            $document->excerpt,
            $document->date,
            $document->body(),
            $document->slug
        );
    });

    return view('posts', [
        'posts' => $posts
    ]);
});*/

/*Route::get('/', function () {
    //Using Laravel collection, collect()->
    $files = File::files(resource_path("posts"));

    $posts = collect($files)
        ->map(function ($file) {
            $document = YamlFrontMatter::parseFile($file);

            return new Post(
                $document->title,
                $document->excerpt,
                $document->date,
                $document->body(),
                $document->slug
            );
        });

    return view('posts', [
        'posts' => $posts
    ]);
});*/

/*Route::get('/', function () {
    //Using Laravel collection, collect()->
    $posts = collect(File::files(resource_path("posts")))
        ->map(fn($file) => YamlFrontMatter::parseFile($file))  //Convert closure to arrow function
        ->map(fn($document) => new Post(
            $document->title,
            $document->excerpt,
            $document->date,
            $document->body(),
            $document->slug
        ));

    return view('posts', [
        'posts' => $posts
    ]);
});*/

Route::get('/', function () {
    return view('posts', [
        'posts' => Test::all()
    ]);
});

/*Route::get('posts/{post}', function ($slug) {
    // Find a post by its slug and pass it to a view called "post
    return view('post', [
        'post' => Post::find($slug)
    ]);
})->where('post', '[A-z_\-]+');*/

/*Route::get('posts/{post}', function ($slug) {
    $post = Post::find($slug);

    return view('post', [
        'post' => $post
    ]);
});*/

Route::get('posts/{post}', function ($id) {
 //   ddd(Post::findOrFail($id));
    return view('post', [
        'post' => Post::findOrFail($id)
    ]);
});
