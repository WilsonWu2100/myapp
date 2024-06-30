<template>
    <div>
        <div v-if="message">
            <h5 class="alert alert-success">
                {{ message }}
            </h5>
        </div>

        <div class="row mt-4">
            <div class="col text-start">
                <a href="/book/add"><button class="btn btn-primary">Add New Book</button></a>
            </div>
            <div class="col text-end">
                <div class="row g-2 mb-2 float-end">
                    <div class="col-auto">
                        <input type="text" name="search" placeholder="Search books" class="form-control" v-model="search">
                    </div>
                    <div class="col-auto">
                        <button @click="searchBooks" class="btn btn-primary">Search</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <table id="bookTable" class="w-100 mt-2">
                <thead>
                <tr>
                    <th class="border">ID</th>
                    <th class="border">Image</th>
                    <th @click="sortBy('name')" class="border">Name
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                        </svg>
                    </th>
                    <th class="border">ISBN</th>
                    <th class="border">Author</th>
                    <th class="border">Category</th>
                    <th class="border">Ratings</th>
                    <th class="border">Price</th>
                    <th class="border">Stock</th>
                    <th class="border">Publisher</th>
                    <th class="border publication_date">Publication Date</th>
                    <th class="border">Operations</th>
                </tr>
                </thead>
                <tr v-for="(book, index) in this.books.data">
                    <td class="border">{{ book.id }}</td>
                    <td class="border">
                        <a :href="`/book/${book.id}/edit`">
                            <img :src="`/images/${book.image}`" class="book_image" alt="book image"/>
                        </a>
                    </td>
                    <td class="border">
                        <a :href="`/book/${book.id}/edit`" class="text-decoration-none">
                            {{ book.name }}
                        </a>
                    </td>
                    <td class="border isbn">{{ book.isbn }}</td>
                    <td class="border">{{ book.author }}</td>
                    <td class="border">
                        <div v-for="category in categories" :key="category.id">
                            <span v-if="category.id === book.category">{{ category.name }}</span>
                        </div>
                    </td>
                    <td class="border">{{ book.ratings }}</td>
                    <td class="border">{{ book.price }}</td>
                    <td class="border">{{ book.stock.quantity }}</td>
                    <td class="border">{{ book.publisher }}</td>
                    <td class="border">{{ book.publication_date }}</td>
                    <td class="border">
                        <div class="d-flex">
                            <div class="p-1">
                                <a :href="`/book/${book.id}/edit`">
                                    <button class="btn btn-primary">Edit</button>
                                </a>
                            </div>
                            <div class="p-1">
                                <button @click="confirmDelete(book.id)" class="btn btn-primary">Delete</button>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>

            <div class="overflow-auto d-flex justify-content-center mt-4">
                <b-pagination-nav :link-gen="linkGen" :number-of-pages="this.totalPages" use-router></b-pagination-nav>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import { BPaginationNav } from 'bootstrap-vue';

    export default {
        components: {
            BPaginationNav
        },

        data() {
            return {
                message: '',
                categories: '',
                books: '',
                totalPages: 1,
                search: ''
            };
        },

        mounted() {
            this.getBooks();
            this.getCategories();
        },

        methods: {
            // Ask the user to confirm the deletion, if the user confirms, proceed with the deletion.
            confirmDelete(id) {
                if (window.confirm('Are you sure you want to delete this record?')) {
                    this.deleteRecord(id);
                }
            },

            // Delete book.
            deleteRecord(id) {
                // Make an HTTP DELETE request to delete the record with the given ID
                axios.delete(`/book/${id}/delete`)
                .then((response) => {
                    // Remove the deleted record from the local array
                    this.message = response.data['message'];
                    window.location.reload();
                })
                .catch(error => {
                    console.error('Error deleting record:', error);
                });
            },

            linkGen(pageNum) {
                return pageNum === 1 ? '?' : `?page=${pageNum}`
            },

            // Get all books.
            async getBooks() {
                await axios.get(`/api/books` + window.location.search)
                .then(response => {
                    this.books = response.data;
                    this.totalPages = response.data.last_page;
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
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

            // Search books.
            async searchBooks() {
                await axios.get(`/api/search?search=${this.search}`)
                .then(response => {
                    this.books = response.data;
                    this.totalPages = response.data.last_page;
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
            },
        },

        computed: {

        }
    }
</script>
