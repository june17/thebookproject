<template>
    <div>
        <div class="boxes">
            <UserDetailCard
                    :key="sub.subId" 
                    v-for="sub in subscribers" 
                    :subscriber="sub" :readBooks="books"
                />
        </div>
    </div>
</template>
<script>
import UserDetailCard from '@/components/UserDetailCard'

export default {
    name: 'Users',
    components: {
        UserDetailCard
    },
    data() {
        return {
            subscribers : this.$store.state.subscribers,
            books: this.$store.state.books
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
