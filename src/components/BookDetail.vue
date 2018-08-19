<template>
    <div>
        <TheNavBar />
        <div class="bookContentBg"></div>   
        <div class="container">
            <div class="row bookContent" >
                <BookShow :book="books"/>
                <section class="col-md-8">
                    <div class="title">
                        <h3 class="sectionTitle">Reviews</h3>
                        <ul>
                            <li>Sort</li>
                            <li>Search</li>
                        </ul>
                    </div>
                    <ul class="reviews" v-for="item in books.reviews">
                    <ReviewItemCard :review="item" :author="username(item.subId)"/>
                    </ul>
                </section>
            </div>      
        </div>

  </div>
</template>

<script>
    import TheNavBar from '@/components/TheNavBar'
    import ReviewItemCard from '@/components/ReviewItemCard'
    import BookShow from '@/components/Bookshow'

    export default {
        components: {
            TheNavBar,
            ReviewItemCard,
            BookShow
        },
        props: {
            id: {
                required: true,
                type: String
            }
        },
        data : function() {
            return {
                subscribers: this.$store.state.subscribers,
                admins: this.$store.state.admins,
                books: this.$store.state.books[this.id],
                value: ''
            }
        },
        methods : {
            username: function(value) {
                return this.$store.state.subscribers[value].name
            }
        }
    }
</script>

<style scoped>
</style>


