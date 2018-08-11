<template>
    <div>
        <TheNavBar />
        <div class="boxes">
            <UserDetailCard 
                    v-for="sub in subscribers" 
                    :subscriber="sub" :readBooks="books"
                />
        </div>
    </div>
</template>
<script>
import UserDetailCard from '@/components/UserDetailCard'
import TheNavBar from '@/components/TheNavBar'

export default {
    name: 'Users',
    components: {
        UserDetailCard,
        TheNavBar
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
