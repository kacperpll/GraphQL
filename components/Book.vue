<template>
    <li class="col-sm-8 card mb-3">
        <p class="card mt-3">
            <span class="subtitle">Title</span>
            {{book.title}}
        </p>
        <p class="card">
            <span class="subtitle">Description</span>
            {{book.description}}
        </p>
        <button @click="deleteBook(index)" class="btn btn-danger">Delete Book</button>
    </li>
</template>

<script>
    export default {
        props: ['index', 'book'],
        data: function(){
            return{
            }
        },
        methods: {
            async deleteBook (index) {
                let payload = this.$store.getters.allBooks[index].id;
                await this.$store.dispatch("deleteBook", payload);
            }
        },

    }
</script>

<style scoped>
    li{
        background-color: #41b883;
    }
    .subtitle{
        font-size: 0.7em;
        color: #878c91;
        user-select: none;
    }
    .card, 
    .btn{
        padding: 5px;
        margin: 12px;
    }
</style>



