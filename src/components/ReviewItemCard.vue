<template>
     <li class="review">
        <p>{{ review.description }}</p>
        <SubscriberInfoItem :id="review.subId"/>
    </li>
</template>
<script>
import SubscriberInfoItem from './SubscriberInfoItem'

export default {
    name: 'ReviewItemCard',
    props: {
        review: {
            required: true,
            type: Object
        }
    },
    components: {
        SubscriberInfoItem
    }
}
</script>
<style lang="scss">
.review {
        margin: 20px 0;
        padding: 36px 40px;
        background: #ffffff;
        box-shadow: 0 2px 10px 2px rgba(0,0,0,.05);
        p {
            font-family: Georgia, 'Times New Roman', Times, serif;
            font-size: 16px;
            line-height: 1.8;
            }
    }
.review:first-child {
    margin: 0;
}
</style>

