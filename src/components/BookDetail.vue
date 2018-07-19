<template>
    <div class="container">
    <h1>{{books.title}}</h1>
        <ReviewItem 
            v-for="item in books.reviews" 
            :review="item" :author="id"/>
  </div>
</template>

<script>
    import sourceData from '@/data'
    import ReviewItem from '@/components/ReviewItem'

    export default {
        components: {
            ReviewItem
        },
        props: {
            id: {
                required: true,
                type: String
            }
        },
        data () {
            return {
                subscribers: sourceData.subscribers,
                admins: sourceData.admins,
                books: sourceData.books[this.id]
            }
        }
    }
</script>