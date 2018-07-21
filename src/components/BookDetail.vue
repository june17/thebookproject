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
                <section class="col-md-4">
                    <div class="book">
                        <div>
                            <h4>The book of impact design</h4>
                            <p>Aadthi Shankar</p>
                        </div>
                    </div>
                    <p>
                        5 Reviews
                    </p>
                    <div style="margin:32px 0"><a class="primary-button">Request Book</a></div>
                    <div>
                        <p>Presently read by</p>
                        <ul class="readers">
                            <li><img src="/static/images/Bitmap1.png" width="40px"></li>
                            <li><img src="/static/images/Bitmap2.png" width="40px"></li>
                            <li><img src="/static/images/Bitmap3.png" width="40px"></li>
                            <li><img src="/static/images/Bitmap4.png" width="40px"></li>
                        </ul>
                    </div>
                </section>
                <section class="col-md-8">
                    <div class="title">
                        <h3 class="sectionTitle">Reviews</h3>
                        <ul>
                            <li>Sort</li>
                            <li>Search</li>
                        </ul>
                    </div>
                    <ul class="reviews">
                    <ReviewItemCard />
                    </ul>
                </section>
            </div>      
        </div>

  </div>
</template>

<script>
    import sourceData from '@/data'
    import ReviewItem from '@/components/ReviewItem'
    import HeaderNavigation from '@/components/HeaderNavigation'
    import ReviewItemCard from '@/components/ReviewItemCard'

    export default {
        components: {
            ReviewItem,
            HeaderNavigation,
            ReviewItemCard
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
        margin-bottom: 28px;
    }

    .book div {
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
        font-size: 13px;
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


