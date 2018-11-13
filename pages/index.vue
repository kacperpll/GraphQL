<template>
    <section class="container">
        <div class="d-flex justify-content-center mt-3 mb-3">
            <logo/>
        </div>
        <div class="d-flex justify-content-center mb-3">
            <button @click="getAllBooks" class="btn btn-success mr-3 mt-1">Get all Books</button>
        </div>
        <div class="d-flex justify-content-center mb-3">
            <div class="input-group">
                <input v-model="newTitle" type="text" class="form-control" placeholder="Harry Potter i Więzień Azkabanu" aria-label="Harry Potter i Więzień Azkabanu" aria-describedby="basic-addon2">
                <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2">Title</span>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center mb-3">
            <div class="input-group">
                <input v-model="newDescription" type="text" class="form-control" placeholder="Książka o Magii" aria-label="Książka o Magii" aria-describedby="basic-addon2">
                <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2">Description</span>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center mb-3">
            <button @click="addNewBook" class="btn btn-success mr-3">Create Book</button>
        </div>
        <div class="d-flex">
            <ul class="d-flex col-sm-12 justify-content-center flex-wrap">
                <book :book="book" :index="index" v-for="(book, index) in allBooks" :key="book.index"></book>
            </ul>
        </div>
    </section>
</template>

<script>
import Vue from "vue";
import Book from "~/components/Book";
import Logo from "~/components/Logo.vue";

export default {
    data() {
        return {
            newDescription: null,
            newTitle: null
        }
    },
    components: {
        Logo,
        Book
    },
    methods: {
        async getAllBooks() {
            await this.$store.dispatch("getAllBooks");
        },
        async addNewBook() {
            let payload = {
                title: this.newTitle,
                description: this.newDescription
            }
            if(this.newTitle && this.newDescription){
                await this.$store.dispatch("addNewBook", payload);
                this.newTitle = null;
                this.newDescription = null;
            } else {
                alert("Proszę wypełnić wymagane pola.")
            }
        }
    },
    computed: {
        allBooks() {
            return this.$store.getters.allBooks;     
        }
    }
};
</script>

