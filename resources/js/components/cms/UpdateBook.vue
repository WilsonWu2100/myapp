<template>
    <div>
        <div v-if="message">
            <h5 class="alert alert-success">
                {{ message }}
            </h5>
        </div>

        <form @submit.prevent="updateBook" enctype="multipart/form-data">
            <table>
                <tr>
                    <td class="border">Name</td>
                    <td class="border"><input type='text' name='name' class="form-control" v-model="formData.name"/></td>
                </tr>
                <tr>
                    <td class="border">Image</td>
                    <td class="border">
                        <div><img :src="imageUrl" class="mb-2" name="image" width="auto" height="192" alt="book image"/></div>
                        <div><input type='file' name='image' class="form-control"></div>
                    </td>
                </tr>
                <tr>
                    <td class="border">Isbn</td>
                    <td class="border"><input type='text' name='isbn' class="form-control" v-model="formData.isbn"/></td>
                </tr>
                <tr>
                    <td class="border">Author</td>
                    <td class="border"><input type='text' name='author' class="form-control" v-model="formData.author"/></td>
                </tr>
                <tr>
                    <td class="border">Description</td>
                    <td class="border"><textarea name='description' rows="5" cols="50" class="form-control" v-model="formData.description"></textarea></td>
                </tr>
                <tr>
                    <td class="border">Category</td>
                    <td class="border">
                        <select name="category" class="form-select" v-model="formData.category">
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
                        <select name="ratings" class="form-select" v-model="formData.ratings">
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
                    <td class="border"><input type='text' name='price' class="form-control" v-model="formData.price"/></td>
                </tr>
                <tr>
                    <td class="border">Stock</td>
                    <td class="border"><input type='text' name='stock' class="form-control" v-model="formData.stock"/></td>
                </tr>
                <tr>
                    <td class="border">Publisher</td>
                    <td class="border"><input type='text' name='publisher' class="form-control" v-model="formData.publisher"/></td>
                </tr>
                <tr>
                    <td class="border">Publication Date</td>
                    <td class="border"><date-picker type='text' name='publication_date' input-class="form-control" v-model="formData.publication_date"></date-picker></td>
                </tr>
                <tr>
                    <td class="border" colspan='2'>
                        <input type="hidden" name="book_id" v-model="formData.id">
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

        data() {
            return {
                formData: {
                    id: '',
                    name: '',
                    image: '',
                    isbn: '',
                    author: '',
                    description: '',
                    category: '',
                    ratings: '',
                    price: '',
                    stock: '',
                    publisher: '',
                    publication_date: ''
                },
                imageUrl: '',
                message: ''
            };
        },

        mounted() {
            this.fetchBook();
        },

        methods: {
            // Fetch book details.
            fetchBook() {
                axios.get('/api' +  window.location.pathname)
                .then(response => {
                    console.log(response.data);
                    this.formData = response.data;
                    this.imageUrl = '/images/' + response.data['image'];
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
            },

            //Update book.
            updateBook() {
                axios.post(window.location.href, this.formData)
                .then(response => {
                    this.message = response.data['message'];
                })
                .catch(error => {
                    console.error('Error saving data:', error);
                });
            }
        }
    }
</script>
