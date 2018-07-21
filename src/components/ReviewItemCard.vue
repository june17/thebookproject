<template>
     <li class="review">
        <p>Since Don’t Make Me Think was first published in 2000, over 400,000 Web designers and developers have relied on Steve Krug’s guide to help them understand the principles of intuitive navigation and information design.
            In this 3rd edition, Steve returns with fresh perspective to reexamine the principles that made Don’t Make Me Think a classic with updated examples and a new chapter on mobile usability. And it’s still short, profusely illustrate and best of all–fun to read. If you’ve read it before, you’ll rediscover what made Don’t Make Me Think so essential to Web designers and developers around the world. If you’ve never read it, you’ll see why so many people have said it should be required reading for anyone working on Web sites.</p>
        <div class="user">
            <img src="/static/images/Bitmap5.png" width="40px">
            <p>Madhav Prasad</p>
        </div>
    </li>
</template>
<script>
export default {
    name: 'ReviewItemCard'
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

