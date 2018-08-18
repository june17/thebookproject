<template>
  <div>
    <TheNavBar />

    <div class="container">
        <div class="row">
            <BookList style="padding-right: 6%"/>
            <TopReadersList />
        </div>
    </div>
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
    computed: {
      user: function() {
        // return this.$store.state.subscribers
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
