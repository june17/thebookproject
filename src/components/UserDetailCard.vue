<template>
    <div>
        <div class="card">
            <h2>{{ subscriber.name }}</h2>
            <p>score:  {{ subscriber.score }}</p>
            <div>
            <h4>Currently reading:</h4> 
            <li v-for="book in subscriber.reading">
                {{readBooks[book].title}}
            </li>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'UserDetailCard',
    props: {
        subscriber: {
            required: true,
            type: Object
        },
        readBooks: {
            required: true,
            type: Object
        }
    }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
.card{
    margin: 8px 0;
    text-align: left;
    padding: 24px;
    width: 360px;
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 2px 4px rgba(0,0,0,.2);
}
    .card h4{
        margin-top: 12px;
    }
    .card p{
        font-size: 14px;
    }

</style>

