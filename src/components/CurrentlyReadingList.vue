<template>
    <div v-if="subscriber">
        <div class="title">
            <h3 class="sectionTitle">CurrentlyReading</h3>
        </div>
        <ul class="items" >
            <CurrentlyReadingListItem 
                :key="book"
                v-for="book in subscriber.reading"
                :book="book"/>
        </ul>
    </div>
</template>
<script>
import CurrentlyReadingListItem from './CurrentlyReadingListItem'
    
export default {    
    name: 'CurrentlyReadingList',
    components: {
        CurrentlyReadingListItem
    },
    props: {
        subscriber: {
            type: Object,
            required: true
        }
    }
}
</script>
<style scoped>
    .items {
        margin: 0
    }
</style>
