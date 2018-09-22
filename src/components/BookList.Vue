<template>
    <section>
        <div class="title">
            <h3 class="sectionTitle">Books Available</h3>
            <ul>
                <li>Sort</li>
                <li>Search</li>
            </ul>
        </div>
        <ul class="items">
            <BookListItem
                :key="bk.bookId" 
                v-for="bk in books"
                :book="bk"/>
        </ul>
    </section>
</template>
<script>
import BookListItem from '@/components/BookListItem.vue'
import {mapState} from 'vuex'

export default {
    name: 'BookList', 
    components: {
        BookListItem
    },
    props: {
        books: {
            required: true,
            type: Array
        }
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

