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
                        <td class="border">Name</td>
                        <td class="border"><input type='text' name='name' value="{{ $book->name }}" class="form-control"/></td>
                    </tr>
                    <tr>
                        <td class="border">Image</td>
                        <td class="border">
                            <div><img src="/images/{{ $book->image }}" class="mb-2" name="image" width="auto" height="192"/></div>
                            <div><input type='file' name='image' class="form-control"></div>
                        </td>
                    </tr>
                    <tr>
                        <td class="border">Isbn</td>
                        <td class="border"><input type='text' name='isbn' value="{{ $book->isbn }}" class="form-control"/></td>
                    </tr>
                    <tr>
                        <td class="border">Author</td>
                        <td class="border"><input type='text' name='author' value="{{ $book->author }}" class="form-control"/></td>
                    </tr>
                    <tr>
                        <td class="border">Description</td>
                        <td class="border"><textarea name='description' rows="5" cols="50" class="form-control">{{ $book->description }}</textarea></td>
                    </tr>
                    <tr>
                        <td class="border">Category</td>
                        <td class="border">
                            <select name="category" class="form-select">
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
                        <td class="border">Ratings</td>
                        <td class="border">
                            <select name="ratings" class="form-select">
                                <option value="1" {{ $book->ratings == 1 ? 'selected' : '' }}>1</option>
                                <option value="2" {{ $book->ratings == 2 ? 'selected' : '' }}>2</option>
                                <option value="3" {{ $book->ratings == 3 ? 'selected' : '' }}>3</option>
                                <option value="4" {{ $book->ratings == 4 ? 'selected' : '' }}>4</option>
                                <option value="5" {{ $book->ratings == 5 ? 'selected' : '' }}>5</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td class="border">Price</td>
                        <td class="border"><input type='text' name='price' value="{{ $book->price }}" class="form-control"/></td>
                    </tr>
                    <tr>
                        <td class="border">Stock</td>
                        <td class="border"><input type='text' name='stock' value="{{ $book->stock }}" class="form-control"/></td>
                    </tr>
                    <tr>
                        <td class="border">Publisher</td>
                        <td class="border"><input type='text' name='publisher' value="{{ $book->publisher }}" class="form-control"/></td>
                    </tr>
                    <tr>
                        <td class="border">Publication Date</td>
                        <td class="border"><input type='text' name='publication_date' value="{{ $book->publication_date }}" id="datepicker" class="form-control"/></td>
                    </tr>
                    <tr>
                        <td class="border" colspan='2'>
                            <input type='submit' class="btn btn-primary" value="Update Book"/>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    </div>
@endsection
