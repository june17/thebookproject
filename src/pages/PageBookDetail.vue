<template>
    <div v-if="book">
        <div class="bookContentBg"></div>   
        <div class="container">
            <div class="row bookContent" >
                <BookShow 
                    class="col-md-4" 
                    :book="book"/>
                <div class="col-md-8">
                <ReviewEditor :bookId="book.bookId" style="margin-bottom: 50px"/>
                <ReviewsList :book="book"/>
                </div>
            </div>      
        </div>
  </div>
</template>

<script>
    import BookShow from '@/components/Bookshow'
    import ReviewsList from '@/components/ReviewsList'
    import ReviewEditor from '@/components/ReviewEditor'
    import asyncDataStatus from '@/mixins/asyncDataStatus'
    
    export default {
        components: {
            BookShow,
            ReviewsList,
            ReviewEditor
        },
        props: {
            id: {
                required: true,
                type: String
            }
        },
        mixins: [asyncDataStatus],
        created () {
            this.$store.dispatch('fetchBook',{id: this.id})
                .then(() => {this.asyncDataStatus_fetched()})  
        },
        computed: {
            book (){
                return this.$store.state.books[this.id]
            }
        }
    }
</script>
