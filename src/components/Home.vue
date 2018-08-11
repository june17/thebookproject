<template>
  <div>
    <TheNavBar />

    <div class="container">
        <div class="row">
            <BookList style="padding-right: 6%"/>
            <TopReadersList />
        </div>
    </div>
    <!-- <div class="boxes">
      <h1>Books available</h1>
      <div v-for="bk in books">
        <BookDetailCard v-if=" bk.inventory > 0 " :book="bk" :subscribers="user" />
      </div>
      <div>
        <h1>Leader board</h1>
        <li v-for="sub in subscribers">{{sub.name}}{{sub.score}}</li>
      </div>
    </div> -->
  
  </div>
</template>

<script>
  import TheNavBar from '@/components/TheNavBar'
  import BookList from '@/components/BookList'
  import TopReadersList from '@/components/TopReadersList'

  export default {
    name: 'Books',
    components: {
      TheNavBar,
      BookList,
      TopReadersList
    },
    data () {
      return {
        subscribers: this.$store.state.subscribers,
        admins: this.$store.state.admins,
        books: this.$store.state.books
      }
    },
    computed: {
      user: function() {
        return this.$store.state.subscribers
        }
    } 
  }
</script>

<style>
.boxes{
    display: flex;
    flex-direction: column;
    align-items: center;
    }

</style>
