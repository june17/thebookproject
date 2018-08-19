<template>
  <div>
    <TheNavBar />

    <div class="container">
        <div class="row">
            <div class="col-md-9" style="padding-right: 6%">
              <BookList />
            </div>
            <div class="col-md-3">
              <div class="title">
                  <h3 class="sectionTitle">Currently Reading</h3>
              </div>
              <CurrentlyReading />
              <TopReadersList />
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  import TheNavBar from '@/components/TheNavBar'
  import BookList from '@/components/BookList'
  import TopReadersList from '@/components/TopReadersList'
  import CurrentlyReading from '@/components/CurrentlyReading'

  export default {
    name: 'Books',
    components: {
      TheNavBar,
      BookList,
      TopReadersList,
      CurrentlyReading
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
