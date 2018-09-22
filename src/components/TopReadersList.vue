<template>
    <section class="topReaders">
        <div class="title">
            <h3 class="sectionTitle">Top Readers</h3>
        </div>
        <ul class="items">
            <ReaderListItem 
                v-for="rd in subscriberList"
                :reader="rd"
                :key="rd['.key']"/>
        </ul>
    </section>
</template>
<script>
import ReaderListItem from '@/components/ReaderListItem'
import {mapState} from 'vuex'

    export default {
        name: 'TopReadersList',
        components: {
            ReaderListItem
        },
        computed: mapState({
            subscriberList: 'subscribers'
        }),
    }
</script>
<style scoped>
    .items {
        margin: 0
    }
</style>
