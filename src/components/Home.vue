<template>
  <div class="boxes">
    <h1>Books available</h1>
    <div v-for="bk in books">
      <BookDetailCard v-if=" bk.copies > 0 " :book="bk" :subscribers="user" />
    </div>
   
    <div>
    <h1>Leader board</h1>
    <li v-for="sub in subscribers">{{sub.name}}{{sub.score}}</li>
    </div>
     
  </div>
</template>

<script>
  import sourceData from '@/data'
  import BookDetailCard from '@/components/BookDetailCard'

  export default {
    name: 'Books',
    components: {
      BookDetailCard
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
