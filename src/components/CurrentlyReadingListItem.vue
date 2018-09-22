<template>
    <li class="item">
        <img src="/static/images/Bitmap1.png" height="32px" width="32px">
        <span>
            <h4>
                <router-link :to="{ name: 'PageBookDetail', params: { id: bookDetail.bookId }}">
                        {{ bookDetail.title }}
                </router-link>
            </h4>
            <p>
                {{bookDetail.author}}
            </p>
        </span>
    </li>      
</template>
<script>
export default {
    props: {
        book: {
            type: String,
            required: true
        }
    },
    computed: {
        bookDetail () {
            return this.$store.state.books[this.book]
        }
    }
}
</script>
<style scoped>
    .items .item {
        display: flex;
        padding: 10px 0;
    }
    .items .item span {
        padding-left: 12px;
    }

    h4 {
        font-weight: 700;
        font-size: 14px;
        margin: 0;
        letter-spacing: .2px;
    }
    .items .item span p {
        font-size: 13px;
        margin: 0 12px 0 0;
        color: #B0B0B0;
        font-weight: 600;
    }

</style>
