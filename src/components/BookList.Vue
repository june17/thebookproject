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
                v-for="bk in booksToBe"
                :book="bk"/>
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
    computed: {
        currentlyRead () {
            return Object.keys(this.$store.state.subscribers[this.$store.state.authId].reading)
        },
        requested () {
            return Object.keys(this.$store.state.subscribers[this.$store.state.authId].requested)
        },
        booksToBe () {
            const removeCurrentlyReding = this.books.filter(book => this.currentlyRead.indexOf(book.bookId) === -1 )
            const removeRequested = removeCurrentlyReding.filter(book => this.requested.indexOf(book.bookId) === -1 )
            return removeRequested
        }
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

