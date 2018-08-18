<template>
    <div>
        <TheNavBar />  
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
import TheNavBar from '@/components/TheNavBar'
import BookListItem from '@/components/BookListItem'
import UserShow from '@/components/UserShow'

export default {
    name: 'User',
    components :{
        TheNavBar,
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
            books: this.$store.state.books
        }
    },
    computed: {
        user () {
            return this.$store.state.subscribers[this.userId]
            },
        bookRead () {
            return this.$store.state.subscribers[this.userId].books
        }

    }
}
</script>
<style scope>

.items {
    margin: 0;
}

</style>
