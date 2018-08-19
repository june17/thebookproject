<template>
    <section>
        <div class="title">
            <h3 class="sectionTitle">Books Available</h3>
            <ul>
                <li>Sort</li>
                <li>Search</li>
            </ul>
        </div>
        <ul class="items" v-for="bk in bookList">
            <BookListItem :book="bk"/>
        </ul>
    </section>
</template>
<script>
import BookListItem from '@/components/BookListItem.vue'

export default {
    name: 'BookList', 
    components: {
        BookListItem
    },
    computed : {
        bookList () {
            return this.$store.state.books
        }
    },
    created () {
       this.$store.dispatch('fetchBooks')
    }
}
</script>

<style scoped>

section .title:first-child {
        padding-right: 5%;
    }

.items {
    margin: 0;
}


</style>

