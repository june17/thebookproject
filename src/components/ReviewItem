<template>
    <div class="review">
        <p> {{ review.description }}</p>
        <h4> {{author}} </h4>
        
    </div>
</template>

<script>
export default {
    name: 'ReviewItem',
    props: {
        review: {
            required: true,
            type: Object
        },
        author: {
            required: true,
            type: String
        }
    }
}
</script>

<style scoped>

.review{
    border: 1px solid #eaeaea;
    border-radius: 4px;
    padding: 24px 24px;
    }
    .review p{
        text-align: left;
        width: 70%;
    }
    .review h4{
        text-align: left;
    }

</style>

