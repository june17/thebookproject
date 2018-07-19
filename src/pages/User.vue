<template>
    <div>  
        <span> 
           <h1>{{ user.name}}</h1>
           <h3>{{ user.score }}</h3>
           <li v-for="book in user.books">
                {{ book }}</li>
        </span>
    </div>
</template>
<script>
import sourceData from '@/data'
export default {
    name: 'User',
    props: {
        userId: {
            required: true,
            type: String
        }
    },
    computed: {
        user () {
            return sourceData.subscribers[this.userId]
            }
        }
}
</script>
