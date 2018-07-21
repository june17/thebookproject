<template>
    <section class="col-md-9 books">
        <div class="title">
            <h3 class="sectionTitle">Books Available</h3>
            <ul>
                <li>Sort</li>
                <li>Search</li>
            </ul>
        </div>
        <ul class="items" v-for="bk in books">
            <BookListItem :book="bk"/>
        </ul>
    </section>
</template>
<script>
import sourceData from '@/data'
import BookListItem from '@/components/BookListItem.vue'

export default {
    name: 'BookList', 
    components: {
        BookListItem
    },
    data () {
        return {
            books: sourceData.books
        }
    }
}
</script>

<style scoped>
.books {
    padding-right: 6%;
}

section .title:first-child {
        padding-right: 5%;
    }

.items {
    margin: 0;
}


</style>

