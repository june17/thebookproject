<template>
    <div> 
        <div class="container" v-if="asyncDataStatus_ready">
            <div class="row">
                    <UserShow :user="subscriber"/>
                    <section class="col-md-9" style="padding-left: 6%">
                        <ReadBookList :subscriber="subscriber"/>
                    </section>
                </div>
        </div>
    </div>
</template>
<script>
import ReadBookList from '@/components/ReadBookList'
import UserShow from '@/components/UserShow'
import asyncDataStatus from '@/mixins/asyncDataStatus'

export default {
    name: 'User',
    components :{
        ReadBookList,
        UserShow
    },
    mixins: [asyncDataStatus],
    props: {
        subId: {
            required: true,
            type: String
        }
    },
    created() {
        this.$store.dispatch('fetchSubscriber', {id: this.subId})
            .then(() => {this.asyncDataStatus_fetched()})  
    },
    computed: {
        subscriber () {
            return this.$store.state.subscribers[this.subId]
        }
    }
}
</script>
<style scope>

    .items {
        margin: 0;
    }

</style>
