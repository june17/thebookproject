<template>
    <div v-if="book">
        <p>{{book.title}}</p>
        <p>{{book.author}}</p>
        
    </div>
</template>
<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    created () {
        this.$store.dispatch('fetchBook', {id: this.id})
    },
    computed: {
        book() {
            return this.$store.state.books[this.id]
        }
    }
}
</script>
