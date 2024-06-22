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
                <form :action="searchRoute" method="GET" class="row g-2 mb-2 float-end">
                    <div class="col-auto">
                        <input type="text" name="search" placeholder="Search books" class="form-control" :value="search">
                    </div>
                    <div class="col-auto">
                        <button type="submit" class="btn btn-primary">Search</button>
                    </div>
                </form>
            </div>
        </div>

        <div class="row">
        <table id="bookTable" class="w-100 mt-2">
            <thead>
            <tr>
                <th class="border">ID</th>
                <th class="border">Image</th>
                <th class="border">Book Name</th>
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
            <tr v-for="(book, index) in books.data">
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
            <b-pagination-nav :link-gen="linkGen" :number-of-pages="getPageNum" use-router></b-pagination-nav>
        </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import { BPaginationNav } from 'bootstrap-vue';

    export default {
        props: ['searchRoute', 'search', 'books'],

        components: {
            BPaginationNav
        },

        data() {
            return {
                message: '',
                categories: ''
            };
        },

        mounted() {
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

            // Get all categories.
            async getCategories() {
                axios.get(`/api/categories`)
                .then(response => {
                    this.categories = response.data;
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
            },

            linkGen(pageNum) {
                return pageNum === 1 ? '?' : `?page=${pageNum}`
            }
        },

        computed: {
            getPageNum() {
                return Math.floor(this.books.total / 10 + 1);
            }
        }
    }
</script>
