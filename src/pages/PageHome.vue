<template>
  <div>
    <div class="container" v-if="books && subscriber">
        <div class="row">
            <div class="col-md-9" style="padding-right: 6%">
              <BookList :books="books"/>
            </div>
            <div class="col-md-3">
              <CurrentlyReadingList :subscriber="subscriber"/>
              <TopReadersList />
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  import BookList from '@/components/BookList'
  import TopReadersList from '@/components/TopReadersList'
  import CurrentlyReadingList from '@/components/CurrentlyReadingList'

  export default {
    name: 'Books',
    components: {
      BookList,
      TopReadersList,
      CurrentlyReadingList
    },
    computed:  {
      books () {
        return Object.values(this.$store.state.books)
      },
      subscriber () {
        return this.$store.state.subscribers[this.$store.state.authId]
      }
    },
    created () {
      this.$store.dispatch('fetchAllBooks')
      this.$store.dispatch('fetchAllSubscribers')
        .then(() => {this.asyncDataStatus_fetched()})  
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
