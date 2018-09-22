<template>
    <form @submit.prevent="createReview">
        <h3 class="sectionTitle">How's the book?</h3>
        <div class="form-group">
            <textarea 
                rows="5" 
                class="form-input"
                v-bind:placeholder="placeholder"
                v-model="description"
            ></textarea>
        </div>
        <div class="form-actions" v-if="this.description != ''">
            <button class="secondary-button">Post Review</button>
        </div>
    </form>
</template>
<script>
export default {
    data () {
        return {
            description: '',
            placeholder: 'write your review here' 
        }
    },
    props: {
        bookId: {
            type: String,
            required: true
        }
    },
    methods: {
        createReview () {
            const review = {
                description: this.description,
                bookId: this.bookId
            }
            this.description= ''
            return this.$store.dispatch('createReview', review)
        }
    }
}
</script>
<style lang="scss" scoped>
    .form-input {
        width: 100%;
        border: none;
        box-shadow: 0 2px 10px 2px rgba(0,0,0,.05);
        margin: 20px 0;
        padding: 36px 40px;
    }
</style>

