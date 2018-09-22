<template>
    <div class="user" v-if="subscriber">
        <img src="/static/images/Bitmap5.png" width="40px">
        <div>
            <p class="name">{{subscriber.name}}</p>
            <p class="score">{{subscriber.score}} stars</p>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    created () {
        this.$store.dispatch('fetchSubscriber', {id: this.id})
    },
    computed : {
        subscriber () {
            return this.$store.state.subscribers[this.id]
        }
    }
}
</script>
<style lang="scss" scoped>
    .user {
        display: flex;
        flex-direction: row;
        align-items: center;
        .name {
            font-family: 'Nunito', sans-serif;
            font-size: 15px;
            margin: 0 12px;
            font-weight: 600;
            color: #707070;
            line-height: 1.3;
        }
        .score {
            font-family: 'Nunito', sans-serif;
            margin: 0 12px;
            font-size: 14px;
            line-height: 1.3;
            color: #bbbbbb;
        }
    }
</style>

