@extends('layout')

@section('content')
    <div>
        <h2>Books Content Management System</h2>
        <div>
            @if(session()->has('message'))
                <h6 class="alert alert-success">
                    {{ session()->get('message') }}
                </h6>
            @endif
            <form action = "/book/add" method="post">
                <input type="hidden" name="_token" value="{{ csrf_token() }}" />
                <table>
                    <tr>
                        <td>Name</td>
                        <td><input type='text' name='name'/></td>
                    </tr>
                    <tr>
                        <td>Image</td>
                        <td><input type='text' name='image'/></td>
                    </tr>
                    <tr>
                        <td>Isbn</td>
                        <td><input type='text' name='isbn'/></td>
                    </tr>
                    <tr>
                        <td>Author</td>
                        <td><input type='text' name='author'/></td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td><input type='text' name='description'/></td>
                    </tr>
                    <tr>
                        <td>Category</td>
                        <td><input type='text' name='category'/></td>
                    </tr>
                    <tr>
                        <td>Ratings</td>
                        <td><input type='text' name='ratings'/></td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td><input type='text' name='price'/></td>
                    </tr>
                    <tr>
                        <td>Stock</td>
                        <td><input type='text' name='stock'/></td>
                    </tr>
                    <tr>
                        <td>Publisher</td>
                        <td><input type='text' name='publisher'/></td>
                    </tr>
                    <tr>
                        <td>Publication Date</td>
                        <td><input type='text' name='publication_date' id="datepicker"/></td>
                    </tr>
                    <tr>
                        <td colspan='2'>
                            <input type='submit' class="button" value="Add Book"/>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
@endsection

