<template>
    <div>
        <ul v-for="book in readingList()">
            <li> 
                <router-link :to="{ name: 'BookDetail', params: { id: bookName[book].bookId }}">
                    {{ bookName[book].title }}
                </router-link>
            </li>
            <li> Write a review</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'CurrentlyReading',
    methods: {
        readingList () {
            return this.$store.state.subscribers[this.$store.state.authId].reading
        }
    },
    computed: {
        bookName () {
            return this.$store.state.books
        }
    }
}
</script>
