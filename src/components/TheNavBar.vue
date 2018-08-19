<template>
    <nav>
        <div class="container">
            <div class="row">
                <ul class="logo">
                    <router-link :to="{ name: 'Home'}">
                        <img src="/static/images/logo.png" height="40px">
                    </router-link>
                </ul>
                <ul>
                    <li>
                        {{ booksRead() + "/" + booksLimit() }}
                        <img src="/static/images/read.svg" height="18px" style="margin-left: 6px">
                    </li>
                    <li v-on:click="dropShow = !dropShow">
                        {{ requestsMade()+ "/2"}}
                        <img src="/static/images/request.svg" height="20px" style="margin-left: 6px">
                        <ul class="dropdown" v-if="dropShow">
                            <h4>Requests</h4>
                            <li v-for="book in requestedBook()">
                                <h6>{{book.title}}</h6>
                                <p>{{book.author}}</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        {{ name() }} 
                        <img src="/static/images/user.png" height="40px" style="margin-left: 6px">
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
    import _ from 'lodash'; 
    export default {
        name: 'TheNavBar',
        data() {
            return {
                dropShow: false
            }
        },
        methods: {
            requestedBook:  function() {
                return this.$store.getters.requestedBooks
            },
            requestsMade () {
                return _.size(this.$store.state.subscribers[this.$store.state.authId].requested)
            },
            booksLimit () {
                return this.$store.state.subscribers[this.$store.state.authId].limit
            },
            booksRead () {
                return _.size(this.$store.state.subscribers[this.$store.state.authId].reading) 
            },
            name () {
                return this.$store.state.subscribers[this.$store.state.authId].name
            }
        }
    }
</script>

<style scoped>
.row {        
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    font-size: 15px;
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
}
    .dropdown {
        margin: 0;
        padding: 8px 20px;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
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
        }  
            .dropdown li h6 {
                color: #1d1d1d;
                margin: 0;
                font-size: 15px;
            }
            .dropdown li p {
                margin: 0;
                padding: 0;
                font-size: 13px;
            }
</style>
