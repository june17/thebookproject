<template>
    <div class="boxes">
        <UserDetailCard 
                v-for="sub in subscribers" 
                :subscriber="sub" :readBooks="books"
            />
    </div>
</template>
<script>
import sourceData from '@/data'
import UserDetailCard from '@/components/UserDetailCard'

export default {
    name: 'Users',
    components: {
        UserDetailCard
    },
    data() {
        return {
            subscribers : sourceData.subscribers,
            books: sourceData.books
        }
    }

}
</script>
<style>
.boxes{
    background: #eaeaea;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
