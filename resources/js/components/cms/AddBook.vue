<template>
    <div>
        <div v-if="message">
            <h5 class="alert alert-success">
                {{ message }}
            </h5>
        </div>

        <form action="/book/add" method="post" enctype="multipart/form-data">
            <table>
                <tr>
                    <td class="border">Name</td>
                    <td class="border"><input type='text' name='name' class="form-control"/></td>
                </tr>
                <tr>
                    <td class="border">Image</td>
                    <td class="border">
                        <input type='file' name='image' class="form-control">
                    </td>
                </tr>
                <tr>
                    <td class="border">Isbn</td>
                    <td class="border"><input type='text' name='isbn' class="form-control"/></td>
                </tr>
                <tr>
                    <td class="border">Author</td>
                    <td class="border"><input type='text' name='author' class="form-control"/></td>
                </tr>
                <tr>
                    <td class="border">Description</td>
                    <td class="border"><textarea name='description' rows="5" cols="50" class="form-control"></textarea></td>
                </tr>
                <tr>
                    <td class="border">Category</td>
                    <td class="border">
                        <select name="category" class="form-select">
                            <option value="Language">Language</option>
                            <option value="Learning">Learning</option>
                            <option value="Programming">Programming</option>
                            <option value="Science Fiction">Science Fiction</option>
                            <option value="Detective Story">Detective Story</option>
                            <option value="Other">Other</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td class="border">Ratings</td>
                    <td class="border">
                        <select name="ratings" class="form-select">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td class="border">Price</td>
                    <td class="border"><input type='text' name='price' class="form-control"/></td>
                </tr>
                <tr class="border">
                    <td class="border">Stock</td>
                    <td><input type='text' name='stock' class="form-control"/></td>
                </tr>
                <tr>
                    <td class="border">Publisher</td>
                    <td class="border"><input type='text' name='publisher' class="form-control"/></td>
                </tr>
                <tr>
                    <td class="border">Publication Date</td>
                    <td class="border"><input type='text' name='publication_date' id="datepicker" class="form-control"/></td>
                </tr>
                <tr>
                    <td class="border" colspan='2'>
                        <input type='submit' class="btn btn-primary" value="Add Book"/>
                    </td>
                </tr>
            </table>
        </form>
    </div>
</template>

<script>
    export default {
        props: ['message']
    }
</script>
