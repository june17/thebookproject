<template>
    <section class="col-md-3 topReaders">
        <div class="title">
            <h3 class="sectionTitle">Top Readers</h3>
        </div>
        <ul class="items" v-for="rd in subscribers">
            <ReaderListItem :reader="rd"/>
        </ul>
    </section>
</template>
<script>
import ReaderListItem from '@/components/ReaderListItem'

    export default {
        name: 'TopReadersList',
        components: {
            ReaderListItem
        },
        data () {
            return {
                subscribers: this.$store.state.subscribers
            }
        }
    }
</script>
<style scoped>
    .items {
        margin: 0
    }
</style>
