<template>
    <section class="col-md-3 userProfile">
        <div class="userInfo">
            <img src="/static/images/Bitmap1.png" height="40px" width="40px">
            <span>
                <h4>{{user.name}}</h4>
            </span>   
        </div>
        <p>Read 5 books</p> 
    </section>
</template>
<script>
export default {
    name: 'UserShow',
    props: {
        user: {
            type: Object
        }
    }
}
</script>
<style scoped>
.userProfile{
    padding: 0;
}
.userProfile .userInfo {
        display: flex;
        align-items: center;
        background: linear-gradient(60deg, #31D387, #08BAF0);
        border-radius: 8px;
        padding: 16px;
    }
.userProfile .userInfo h4 {
        font-size: 20px;
        margin: 0 0 0 12px;
        font-weight: 700;
        color: #ffffff;
    }
.userProfile .userInfo p {
        margin-top: 12px;
        font-size: 14px;
    }
</style>
