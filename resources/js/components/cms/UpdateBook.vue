<template>
    <div>
        <div v-if="message">
            <h5 class="alert alert-success">
                {{ message }}
            </h5>
        </div>

        <form :action="`/book/${book.id}/edit`" method="post" enctype="multipart/form-data">
            <table>
                <tr>
                    <td class="border">Name</td>
                    <td class="border"><input type='text' name='name' :value="book.name" class="form-control"/></td>
                </tr>
                <tr>
                    <td class="border">Image</td>
                    <td class="border">
                        <div><img :src="`/images/${book.image}`" class="mb-2" name="image" width="auto" height="192" alt="book image"/></div>
                        <div><input type='file' name='image' class="form-control"></div>
                    </td>
                </tr>
                <tr>
                    <td class="border">Isbn</td>
                    <td class="border"><input type='text' name='isbn' :value="book.isbn" class="form-control"/></td>
                </tr>
                <tr>
                    <td class="border">Author</td>
                    <td class="border"><input type='text' name='author' :value="book.author" class="form-control"/></td>
                </tr>
                <tr>
                    <td class="border">Description</td>
                    <td class="border"><textarea name='description' rows="5" cols="50" class="form-control">{{ book.description }}</textarea></td>
                </tr>
                <tr>
                    <td class="border">Category</td>
                    <td class="border">
                        <select name="category" class="form-select">
                            <option value="Language" :selected="book.category === 'Language' ? 'selected' : ''">Language</option>
                            <option value="Learning" :selected="book.category === 'Learning' ? 'selected' : ''">Learning</option>
                            <option value="Programming" :selected="book.category === 'Programming' ? 'selected' : ''">Programming</option>
                            <option value="Science Fiction" :selected="book.category === 'Science Fiction' ? 'selected' : ''">Science Fiction</option>
                            <option value="Detective Story" :selected="book.category === 'Detective Story' ? 'selected' : ''">Detective Story</option>
                            <option value="Other" :selected="book.category === 'Other' ? 'selected' : ''">Other</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td class="border">Ratings</td>
                    <td class="border">
                        <select name="ratings" class="form-select">
                            <option value="1" :selected="book.ratings === 1 ? 'selected' : ''">1</option>
                            <option value="2" :selected="book.ratings === 2 ? 'selected' : ''">2</option>
                            <option value="3" :selected="book.ratings === 3 ? 'selected' : ''">3</option>
                            <option value="4" :selected="book.ratings === 4 ? 'selected' : ''">4</option>
                            <option value="5" :selected="book.ratings === 5 ? 'selected' : ''">5</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td class="border">Price</td>
                    <td class="border"><input type='text' name='price' :value="book.price" class="form-control"/></td>
                </tr>
                <tr>
                    <td class="border">Stock</td>
                    <td class="border"><input type='text' name='stock' :value="book.stock" class="form-control"/></td>
                </tr>
                <tr>
                    <td class="border">Publisher</td>
                    <td class="border"><input type='text' name='publisher' :value="book.publisher" class="form-control"/></td>
                </tr>
                <tr>
                    <td class="border">Publication Date</td>
                    <td class="border"><date-picker type='text' name='publication_date' input-class="form-control" :value="book.publication_date" id="datepicker"></date-picker></td>
                </tr>
                <tr>
                    <td class="border" colspan='2'>
                        <input type='submit' class="btn btn-primary" value="Update Book"/>
                    </td>
                </tr>
            </table>
        </form>
    </div>
</template>

<script>
    import DatePicker from 'vuejs-datepicker';

    export default {
        components: { DatePicker },

        props: ['message', 'book']
    }
</script>
