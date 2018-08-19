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
                    <li>
                        {{ requestsMade()+ "/2"}}
                        <img src="/static/images/request.svg" height="20px" style="margin-left: 6px">
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
        methods : {
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
  .row ul {
          display: flex;
          align-items: center;
        }
  .row ul li {
            list-style: none;
            margin-left: 24px;
            color: #B0B0B0;
          }
  li:last-child {
                color: #1D1C1C;
            }
</style>
