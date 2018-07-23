<template>
     <li class="item">
        <img src="/static/images/Bitmap1.png" height="32px" width="32px">
        <span>
            <h4>
                <router-link :to="{ name: 'User', params: { userId: reader.subId }}">
                        {{ reader.name }}
                </router-link>
            </h4>
            <p> {{ reader.score }} Points</p>
        </span>
    </li>      
</template>
<script>
export default {
    name: 'ReaderListItem',
    props: {
        reader: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
    .topReaders .items .item {
        display: flex;
        padding: 10px 0;
    }
    .topReaders .items .item span {
        padding-left: 12px;
    }

    h4 {
        font-weight: 700;
        font-size: 14px;
        margin: 0;
        letter-spacing: .2px;
    }
    .topReaders .items .item span p {
        font-size: 13px;
        margin: 0 12px 0 0;
        color: #B0B0B0;
        font-weight: 600;
    }

</style>

