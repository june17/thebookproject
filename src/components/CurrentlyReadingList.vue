<template>
    <div>
        <div v-if="subscriber">
            <div class="title">
                <h3 class="sectionTitle">CurrentlyReading</h3>
            </div>
            <ul class="items" >
                <div v-if="subscriber.reading">
                    <CurrentlyReadingListItem 
                        :key="book"
                        v-for="book in subscriber.reading"
                        :book="book"/>
                </div>
                <div v-else style="color: #aaaaaa; margin-bottom: 32px;">
                    No records found
                </div>
            </ul>
        </div>
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
            type: Object
        }
    }
}
</script>
<style scoped>
    .items {
        margin: 0
    }
</style>
