<template>
    <section class="topReaders">
        <div class="title">
            <h3 class="sectionTitle">Top Readers</h3>
        </div>
        <ul class="items" v-for="rd in subscriberList">
            <ReaderListItem :reader="rd"/>
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
        created () {
            this.$store.dispatch('fetchSubscribers')
        }
    }
</script>
<style scoped>
    .items {
        margin: 0
    }
</style>
