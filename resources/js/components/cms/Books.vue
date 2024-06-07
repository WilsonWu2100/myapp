<template>
    <div>
        <div v-if="message">
            <h5 class="alert alert-success">
                {{ message }}
            </h5>
        </div>

        <div class="row justify-content-between mt-4">
            <div class="col-4">
                <a href="/book/add"><button class="btn btn-primary">Add New Book</button></a>
            </div>
            <div class="col-4 text-end">
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
                    <img :src="`/images/${book.image}`" class="book_image" alt="book image"/>
                </td>
                <td class="border">{{ book.name }}</td>
                <td class="border">{{ book.isbn }}</td>
                <td class="border">{{ book.author }}</td>
                <td class="border">{{ book.category }}</td>
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
                            <form :action="`/book/${book.id}/delete`" method="post">
                                <button type="submit" class="btn btn-primary">Delete</button>
                            </form>
                        </div>
                    </div>
                </td>
            </tr>
        </table>


    </div>
</template>

<script>

    export default {
        props: ['searchRoute', 'message', 'search', 'books', 'pagination']
    }
</script>
