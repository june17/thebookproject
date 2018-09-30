<template>
    <nav>
        <div class="container">
            <div class="row">
                <ul class="logo" v-if="user">
                    <router-link :to="{name: 'PageHome'}">
                        <img src="/static/images/logo.png" height="40px">
                    </router-link>
                </ul>
                <ul v-if="user">
                    <li v-on:click="showReadingBooks = !showReadingBooks">
                         0/ {{user.limit ? user.limit : 0}}
                        <img src="/static/images/read.svg" height="18px" style="margin-left: 6px">
                        <ul class="dropdown" v-if="showReadingBooks">
                            <h4>Currently Reading</h4>
                            <li :key="book.bookId"
                                v-for="book in readingBooks">
                                <span>
                                    <h6>{{ book.title }}</h6>
                                    <p></p>
                                </span>
                            </li>
                        </ul>
                    </li>
                    <li v-on:click="showRequestedBooks = !showRequestedBooks">
                            {{requestedBooksCount}}/{{user.limit}}<!--//requests Made -->
                        <img src="/static/images/request.svg" height="20px" style="margin-left: 6px">
                        <ul class="dropdown" v-if="showRequestedBooks">
                            <h4>Requests</h4>
                            <li :key="book.bookId"
                                v-for="book in requestedBooks">
                                <span>
                                    <h6>{{ book.title }}</h6>
                                    <p></p>
                                </span>
                                <!-- <span style="color: #f00000" v-on:click="removeBookRequest(book)">
                                    Del
                                </span> -->
                            </li>
                        </ul>
                    </li>
                    <li>
                        {{ user.name }} 
                        <img src="/static/images/user.png" height="40px" style="margin-left: 6px">
                    </li>
                    <li><button @click.prevent="signOut">Log out</button></li>
                </ul>
                <ul v-else class="notSignedInMenu">
                    Have an account? 
                    <button @click.prevent="registerWithGoogle" class="btn-red btn-xsmall"><i class="fa fa-google fa-btn"></i>Sign up with Google</button>
                    <!-- <router-link :to="{name: 'PageRegister'}">Sign in -->
                    <!-- </router-link> -->
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
    name: 'TheNav',
    data() {
        return {
            showRequestedBooks: false,
            showReadingBooks: false
        }
    },
    created (){
        this.$store.dispatch('fetchAuthUser')
            .then(subId => { 
                return this.$store.dispatch('fetchSubscriber', {id: subId}) 
                })
            .then(subscriber => {
                    this.subscriber = subscriber
                    if(subscriber.reading){
                        Object.values(subscriber.reading).map((index) => this.$store.dispatch('fetchBook', {id: index}))
                    }
                    if(subscriber.requested){
                        Object.values(subscriber.requested).map((index) => this.$store.dispatch('fetchBook', {id: index}))
                    }
                })
    },
    methods: {
        signOut() {
            this.$store.dispatch('signOut')
            this.$router.push({name: 'PageLanding'})
        },
        registerWithGoogle () {
            this.$store.dispatch('signInWithGoogle', this.form)
            .then(() => this.$router.push({name: 'PageHome'}))
        }
    },
    computed: {
        ...mapGetters ({
            'user' : 'authUser'
        }), 
        readingBooks () {
            return this.$store.getters.readingBooksList
        },
        requestedBooks () {
            return this.$store.getters.requestedBooksList
        },
        requestedBooksCount () {
            const number = Object.values(this.$store.getters.requestedBooksList).length
            return number
        }
    }
}
</script>
<style scoped>
.row {        
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
    height: 90px;
  }
    .row >ul {
          display: flex;
          align-items: center;
        }
        .row >ul >li {
                list-style: none;
                margin-left: 24px;
                color: #B0B0B0;
            }
        .row >ul li:hover {
            cursor: pointer;
        }
        li:last-child {
                    color: #1D1C1C;
                }
.dropdown {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background: #fcfcfc;
    box-shadow: 0 2px 5px rgba(0,0,0,.2);
    width: 300px;
    min-height: 50px;
    top: 65px;
    z-index: 1;
    margin: 0;
    padding: 8px 20px;
}
        .dropdown h4 {
            font-size: 13px;
            text-transform: uppercase;
            font-weight: bold;
        }

        .dropdown li {
            color: #1d1d1d;
            margin: 0;
            padding: 8px 0; 
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
        }  
            .dropdown li span h6 {
                color: #1d1d1d;
                margin: 0;
                font-size: 15px;
            }
            .dropdown li span p {
                margin: 0;
                padding: 0;
                font-size: 13px;
            }

.notSignedInMenu {
    position: absolute;
    right: 0;
    color: #999999;
}
</style>

