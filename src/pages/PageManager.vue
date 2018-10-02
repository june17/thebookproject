<template>
    <div class="container">
        <h1>Admin Area</h1>
        <h4>Book Requests received</h4>
        <li :key="item.requestedAt"
            v-for="item in bookRequests">
            <p>{{item.bookId}}<br>{{item.requestedAt}}<br>{{item.subId}}</p>
            <button @click="grantBook(item)" class="secondary-button show">Grant Book</button>
        </li>
    </div>
</template>
<script>
import asyncDataStatus from '@/mixins/asyncDataStatus'
export default {
    mixins: [asyncDataStatus],
    created() {
        this.$store.dispatch('fetchAdminBookRequests')
            .then(() => {this.asyncDataStatus_fetched()})    
    },
    computed: {
        bookRequests () {
            return this.$store.getters.adminBookRequests
        }
    },
    methods: {
        grantBook(bookRequest) {
            this.$store.dispatch('grantBook', bookRequest)
        }
    }
}
</script>
