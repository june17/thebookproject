<template>
    <div>
        <li :key="book"
            v-for="book in bookDetail">
            <ReadBookListItem :id="book"/>
        </li>
    </div>
</template>
<script>
import ReadBookListItem from '@/components/ReadBookListItem.vue'
export default {
    components:{
        ReadBookListItem
    },
    props: {
        subscriber: {
            type: Object,
            required: true
        }
    },
    computed: {
        bookDetail () {
            return Object.values(this.subscriber.books)
        }
    }
}
</script>
