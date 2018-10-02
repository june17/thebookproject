<template>
    <div>
        <h1>Page not found</h1>
        <h2>Probably you'll have to go back to 
            <router-link :to="{ name: 'PageHome'}"> home </router-link>
        
        </h2>    
    </div>
</template>
<script>
import asyncDataStatus from '@/mixins/asyncDataStatus'
export default {
    mixins: [asyncDataStatus],
    created() {
        this.asyncDataStatus_fetched()
    }
}
</script>
<style scoped>


</style>
