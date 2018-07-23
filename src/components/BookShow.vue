<template>
        <section class="col-md-4">
        <div class="book">
            <div>
                <h4>{{ book.title }}</h4>
                <p>{{ book.author }}</p>
            </div>
        </div>
        <p>
            5 Reviews
        </p>
        <div style="margin:32px 0"><a class="primary-button">Request Book</a></div>
        <div>
            <p>Presently read by</p>
            <ul class="readers">
                <li v-for="reader in book.subs">
                    <img src="/static/images/Bitmap1.png" width="40px">
                </li>
            </ul>
        </div>
    </section>
</template>
<script>
export default {
    name: 'BookShow',
    props: {
        book: {
            type: Object,
            required: true
        }
    }
}
</script>
<style scoped>
    .book{
        position: relative;
        height: 340px;
        background: 
            url(/static/images/bookBg.png),
            linear-gradient(120deg, #6588F5, #C64DDF);
        background-blend-mode: color-burn;
        border-radius: 8px;
        width: calc(100% - 40px);
        box-shadow: 
            0 5px 0 0 #ffffff, 
            0 10px 0 0 #8EBBF0;
        margin-bottom: 24px;
        padding: 0;
    }

    .book div {
            margin: 0;
            position: absolute;
            bottom: 12px;
            padding: 16px;
        }
    .book h4 {
        color: #ffffff;
        font-weight: 700;
        margin: 0;
        font-size: 22px;
    }
    .book p {
        color: #E3CEF7;
        font-size: 14px;
        margin: 0;
    }

    .readers {
        display: flex;
        flex-direction: row;
    }
    .readers li{
            list-style: none;
            margin-left: 12px;
    }
</style>
