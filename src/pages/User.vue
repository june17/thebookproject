<template>
    <div>
        <HeaderNavigation />  
        <!-- <span> 
           <h1>{{ user.name}}</h1>
           <h3>{{ user.score }}</h3>
           <li v-for="book in user.books">
                {{ book }}</li>
        </span> -->

    <div class="container">
        <div class="row">
                <UserShow :user="user"/>
                <section class="col-md-9" style="padding-left: 6%">
                    <div class="title">
                        <h3 class="sectionTitle">Books Read</h3>
                        <ul>
                            <li>Sort</li>
                            <li>Search</li>
                        </ul>
                    </div>
                    <ul class="items" v-for="bk in bookRead">
                        <BookListItem :book="books[bk]"/>
                    </ul>
                </section>
            </div>
    </div>
    </div>
</template>
<script>
import sourceData from '@/data'
import HeaderNavigation from '@/components/HeaderNavigation'
import BookListItem from '@/components/BookListItem'
import UserShow from '@/components/UserShow'

export default {
    name: 'User',
    components :{
        HeaderNavigation,
        BookListItem,
        UserShow
    },
    props: {
        userId: {
            required: true,
            type: String
        }
    },
    data () {
        return {
            books: sourceData.books
        }
    },
    computed: {
        user () {
            return sourceData.subscribers[this.userId]
            },
        bookRead () {
            return sourceData.subscribers[this.userId].books
        }

    }
}
</script>
<style scope>

.items {
    margin: 0;
}

</style>
