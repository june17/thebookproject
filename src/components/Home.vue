<template>
  <div>
    <HeaderNavigation />

    <div class="container mainContent">
        <div class="row">
            <BookList />
            <TopReadersList />
        </div>
    </div>
    <!-- <div class="boxes">
      <h1>Books available</h1>
      <div v-for="bk in books">
        <BookDetailCard v-if=" bk.copies > 0 " :book="bk" :subscribers="user" />
      </div>
      <div>
        <h1>Leader board</h1>
        <li v-for="sub in subscribers">{{sub.name}}{{sub.score}}</li>
      </div>
    </div> -->
  
  </div>
</template>

<script>
  import HeaderNavigation from '@/components/HeaderNavigation'
  import BookList from '@/components/BookList'
  import sourceData from '@/data'
  import TopReadersList from '@/components/TopReadersList'

  export default {
    name: 'Books',
    components: {
      HeaderNavigation,
      BookList,
      TopReadersList
    },
    data () {
      return {
        subscribers: sourceData.subscribers,
        admins: sourceData.admins,
        books: sourceData.books
      }
    },
    computed: {
      user: function() {
        return sourceData.subscribers
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
