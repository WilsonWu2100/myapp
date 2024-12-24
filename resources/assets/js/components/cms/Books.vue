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
                    <th class="border">Image</th>
                    <th class="border ">
                        <div class="col d-flex justify-content-between">Name
                            <button @click="sortBooks('name')"  class="sort-icon text-white right-item">
                                <i v-if="sortBy === 'name'">
                                    <i :class="sortOrder === 'asc' ? 'icon-caret-up-fill' : 'icon-caret-down-fill'"></i>
                                </i>
                                <i v-else class="icon-sort"></i>
                            </button>
                        </div>
                    </th>
                    <th class="border">ISBN</th>
                    <th class="border">Author</th>
                    <th class="border">Category</th>
                    <th class="border">
                        <div class="col d-flex justify-content-between">Ratings
                            <button @click="getBooks('ratings')"  class="sort-icon text-white">
                                <i v-if="sortBy === 'ratings'">
                                    <i :class="sortOrder === 'asc' ? 'icon-caret-up-fill' : 'icon-caret-down-fill'"></i>
                                </i>
                                <i v-else class="icon-sort"></i>
                            </button>
                        </div>
                    </th>
                    <th class="border">
                        <div class="d-flex justify-content-between">Price
                            <button @click="getBooks('price')"  class="sort-icon text-white">
                                <i v-if="sortBy === 'price'">
                                    <i :class="sortOrder === 'asc' ? 'icon-caret-up-fill' : 'icon-caret-down-fill'"></i>
                                </i>
                                <i v-else class="icon-sort"></i>
                            </button>
                        </div>
                    </th>
                    <th class="border">Stock</th>
                    <th class="border">Publisher</th>
                    <th class="border publication-date">Publication Date</th>
                    <th class="border">Operations</th>
                </tr>
                </thead>
                <tr v-for="(book, index) in this.books.data">
                    <td class="border">
                        <a :href="`/book/${book.id}/edit`">
                            <img :src="`/images/${book.image}`" class="book-image" alt="book image"/>
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
                    <td class="border">{{ book.stock }}</td>
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
                search: '',
                sortBy: "id",  //Default sort by id
                sortOrder: "desc",  //Default sort direction
                page: 1,
                sortKey: "",
                isAscending: true,
            };
        },

        mounted() {
            //this.isAscending = !this.isAscending;// Toggle the state
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
                return pageNum === 1 ? '?' : `?page=` + pageNum + `&sortBy=` + this.sortBy + `&sortOrder=` + this.sortOrder;
            },

            // Get all books.
            async getBooks(sortBy = "id", sortOrder = "desc", page = 1) {
                /*if (sortOrder === "") {
                    this.sortOrder = "asc";
                } else {
                    this.sortOrder = "desc";
                }*/
               /* console.log(this.sortBy);
                if (this.sortBy === 'id') {
                    //sortBy = this.sortOrder === 'asc' ? 'desc' : 'asc'; // Toggle direction
                    this.sortBy = 'name';
                } else {
                    this.sortBy = 'name';
                    sortOrder = 'asc'; // Reset to ascending
                }
                //this.sortBy = "name";
                console.log(this.sortBy);*/
              /*  if (sortBy === 'name') {
                    sortBy = this.sortOrder === 'asc' ? 'desc' : 'asc'; // Toggle direction
                } else {
                    sortBy = 'name';
                    sortOrder = 'asc'; // Reset to ascending
                }

                const queryString = window.location.search.substring(1, window.location.search.length);
                const params = new URLSearchParams(queryString);
                page = params.get('page') !== "" && params.get('page') !== null ? params.get('page') : this.page;

                console.log(`/api/books` + "?" + "sortBy=" + sortBy + "&sortOrder=" + sortOrder + "&page=" + page);*/
                /*if (this.sortKey === "") {
                    this.isAscending = true;
                } else {
                    this.isAscending = !this.isAscending;
                }
                this.sortKey = sortBy;

                const queryString = window.location.search.substring(1, window.location.search.length);
                const params = new URLSearchParams(queryString);

                if (sortBy == null || sortBy === "") {
                    sortBy = params.get('sortBy') !== "" && params.get('sortBy') !== null ? params.get('sortBy') : this.sortBy;
                } {

                    this.sortBy = sortBy;
                }

                console.log(this.sortBy);

                if (sortOrder == null || sortOrder === "") {
                    sortOrder = params.get('sortOrder') !== "" && params.get('sortOrder') !== null ? params.get('sortOrder') : this.sortOrder;
                } else {
                    this.sortOrder = sortOrder;
                }

                page = params.get('page') !== "" && params.get('page') !== null ? params.get('page') : this.page;*/

                const queryString = window.location.search.substring(1, window.location.search.length);
                const params = new URLSearchParams(queryString);
                page = params.get('page') !== "" && params.get('page') !== null ? params.get('page') : this.page;

                await axios.get(`/api/books` + "?" + "sortBy=" + sortBy + "&sortOrder=" + sortOrder + "&page=" + page)
                .then(response => {
                    this.books = response.data;
                    this.totalPages = response.data.last_page;
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
            },

            async sortBooks(sortBy, sortOrder) {  console.log("wosdsf");
               /* const formData = new FormData();
                formData.append('sortBy', sortBy);
                formData.append('sortOrder', sortOrder);

                this.sortBy = sortBy;
                this.sortOrder = sortOrder;

                await axios.post(`/api/sort`, formData)
                .then(response => {
                    this.books = response.data;
                    this.totalPages = response.data.last_page;

                    console.log(response.data);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });*/
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
