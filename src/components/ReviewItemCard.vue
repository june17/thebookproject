<template>
     <li class="review">
        <p>{{ review.description }}</p>
        <div class="user">
            <img src="/static/images/Bitmap5.png" width="40px">
            <p>{{review.subId}}</p>
        </div>
    </li>
</template>
<script>
export default {
    name: 'ReviewItemCard',
    props: {
        review: {
            required: true,
            type: Object
        },
        author: {
            required: true,
            type: String
        }
    }
}
</script>
<style scoped>
    .review {
            margin: 20px 0;
            padding: 36px 40px;
            background: #ffffff;
            box-shadow: 0 2px 10px 2px rgba(0,0,0,.05);
    }
    .review p {
                font-family: Georgia, 'Times New Roman', Times, serif;
                font-size: 16px;
                line-height: 1.8;
            }
    .review>.user {
                display: flex;
                flex-direction: row;
                align-items: center;
    }
    .review>.user p {
                    font-family: 'Nunito', sans-serif;
                    margin: 0 12px;
                    font-weight: 600;
                    color: #707070;
                }
    .review:first-child {
        margin: 0;
    }
</style>

