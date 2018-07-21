<template>
    <div>
        <HeaderNavigation />
        <div class="bookContentBg"></div>   
    <!-- <h1>{{books.title}}</h1>
    <ReviewItem 
        v-for="item in books.reviews" 
        :review="item" :author="id"/> -->
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
                    <ReviewItemCard :review="item" :author="id"/>
                    </ul>
                </section>
            </div>      
        </div>

  </div>
</template>

<script>
    import sourceData from '@/data'
    import HeaderNavigation from '@/components/HeaderNavigation'
    import ReviewItemCard from '@/components/ReviewItemCard'
    import BookShow from '@/components/Bookshow'

    export default {
        components: {
            HeaderNavigation,
            ReviewItemCard,
            BookShow
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

<style scoped>


</style>


