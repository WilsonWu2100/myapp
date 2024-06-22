<template>
    <div>
        <div v-if="message">
            <h5 class="alert alert-success">
                {{ message }}
            </h5>
        </div>

        <form @submit.prevent="addBook" method="post" enctype="multipart/form-data">
            <table>
                <tr>
                    <td class="border">Name</td>
                    <td class="border"><input type='text' name='name' class="form-control" v-model="formData.name"/></td>
                </tr>
                <tr>
                    <td class="border">Image</td>
                    <td class="border">
                        <input type='file' name='image' class="form-control" @change="handleFileUpload">
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
                            <option v-for="category in categories" :value="category.id">
                                {{ category.name }}
                            </option>
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
                <tr class="border">
                    <td class="border">Stock</td>
                    <td><input type='text' name='stock' class="form-control"/></td>
                </tr>
                <tr>
                    <td class="border">Publisher</td>
                    <td class="border"><input type='text' name='publisher' class="form-control" v-model="formData.publisher"/></td>
                </tr>
                <tr>
                    <td class="border">Publication Date</td>
                    <td class="border"><date-picker name='publication_date' id="datepicker" input-class="form-control" v-model="formData.publication_date"></date-picker></td>
                </tr>
                <tr>
                    <td class="border" colspan='2'>
                        <input type='submit' class="btn btn-primary" value="Add Book" />
                    </td>
                </tr>
            </table>
        </form>
    </div>
</template>

<script>
    import axios from 'axios';
    import DatePicker from 'vuejs-datepicker';

    export default {
        components: { DatePicker },

        data() {
            return {
                imageFile: null, // Store the selected file
                formData: {
                    name: '',
                    image: '',
                    isbn: '',
                    author: '',
                    description: '',
                    category: '',
                    ratings: '',
                    price: '',
                    publisher: '',
                    publication_date: ''
                },
                message: '',
                categories: ''
            };
        },

        mounted() {
            this.getCategories();
        },

        methods: {
            // Add book.
            addBook() {
                const formData = new FormData();

                // Append all form data to formData.
                for (const key in this.formData) {
                    if (Object.prototype.hasOwnProperty.call(this.formData, key)) {
                        formData.append(key, this.formData[key]);
                    }
                }

                // Append the image file.
                formData.append('image', this.imageFile);

                axios.post('/book/add', formData)
                .then(response => {
                    this.message = response.data['message'];
                })
                .catch(error => {
                    // Handle error if needed
                });
            },

            // Get the uploaded file.
            handleFileUpload(event) {
                this.imageFile = event.target.files[0];
            },

            // Get all categories.
            async getCategories() {
                await axios.get(`/api/categories`)
                .then(response => {
                    this.categories = response.data;
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
            },
        },
    }
</script>
