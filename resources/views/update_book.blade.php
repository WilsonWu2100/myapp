@extends('layout')

@section('content')
    <div>
        <h2>Books Content Management System</h2>
        <div>
            @if(session()->has('message'))
                <h5 class="alert alert-success">
                    {{ session()->get('message') }}
                </h5>
            @endif
            <form action = "/book/{{ $book->id }}/edit" method="post" enctype="multipart/form-data">
                <input type="hidden" name="_token" value="{{ csrf_token() }}" />
                <table>
                    <tr>
                        <td>Name</td>
                        <td><input type='text' name='name' value="{{ $book->name }}"/></td>
                    </tr>
                    <tr>
                        <td>Image</td>
                        <td>
                            <div><img src="/images/{{ $book->image }}" class="upload_image" name="image"/></div>
                            <div><input type='file' name='image'></div>
                        </td>
                    </tr>
                    <tr>
                        <td>Isbn</td>
                        <td><input type='text' name='isbn' value="{{ $book->isbn }}"/></td>
                    </tr>
                    <tr>
                        <td>Author</td>
                        <td><input type='text' name='author' value="{{ $book->author }}"/></td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td><textarea name='description' rows="5" cols="50">{{ $book->description }}</textarea></td>
                    </tr>
                    <tr>
                        <td>Category</td>
                        <td>
                            <select name="category" class="category">
                                <option value="Language" {{ $book->category == 'Language' ? 'selected' : '' }}>Language</option>
                                <option value="Learning" {{ $book->category == 'Learning' ? 'selected' : '' }}>Learning</option>
                                <option value="Programming" {{ $book->category == 'Programming' ? 'selected' : '' }}>Programming</option>
                                <option value="Science Fiction" {{ $book->category == 'Science Fiction' ? 'selected' : '' }}>Science Fiction</option>
                                <option value="Detective Story" {{ $book->category == 'Detective Story' ? 'selected' : '' }}>Detective Story</option>
                                <option value="Other" {{ $book->category == 'Other' ? 'selected' : '' }}>Other</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Ratings</td>
                        <td>
                            <select name="ratings" class="ratings">
                                <option value="1" {{ $book->ratings == 1 ? 'selected' : '' }}>1</option>
                                <option value="2" {{ $book->ratings == 2 ? 'selected' : '' }}>2</option>
                                <option value="3" {{ $book->ratings == 3 ? 'selected' : '' }}>3</option>
                                <option value="4" {{ $book->ratings == 4 ? 'selected' : '' }}>4</option>
                                <option value="5" {{ $book->ratings == 5 ? 'selected' : '' }}>5</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td><input type='text' name='price' value="{{ $book->price }}"/></td>
                    </tr>
                    <tr>
                        <td>Stock</td>
                        <td><input type='text' name='stock' value="{{ $book->stock }}"/></td>
                    </tr>
                    <tr>
                        <td>Publisher</td>
                        <td><input type='text' name='publisher' value="{{ $book->publisher }}"/></td>
                    </tr>
                    <tr>
                        <td>Publication Date</td>
                        <td><input type='text' name='publication_date' value="{{ $book->publication_date }}" id="datepicker"/></td>
                    </tr>
                    <tr>
                        <td colspan='2'>
                            <input type='submit' class="button" value="Update Book"/>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    </div>
@endsection
