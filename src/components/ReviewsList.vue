<template>
    <div>
        <div class="title">
            <h3 class="sectionTitle">Reviews</h3>
            <ul>
                <li>Sort</li>
                <li>Search</li>
            </ul>
        </div>
        <ul class="reviews"
            :key="item.subId"
            v-for="item in book.reviews">

            <ReviewItemCard :review="item" />
        </ul>
    </div>   
</template>
<script>
import ReviewItemCard from './ReviewItemCard'

export default {
    components:{
        ReviewItemCard
    },
    props: {
        book: {
            type: Object,
            required: true
        }
    }
}
</script>
