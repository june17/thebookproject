<template>
    <li class="item">
        <span>
            <h4>{{ book.title }}</h4>
            <span>
                <p>{{ book.author }}</p>
                <p>5 Reviews</p>
            </span>
        </span>
        <span class="secondary-button show">Request Book</span>
    </li>
</template>

<script>
export default {
    name: 'BookListItem',
    props: {
        book: {
            required: true,
            type: Object
        }
    }
}
</script>

<style scoped>
    .item {
            padding: 12px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
    }
    .item h4{
            font-weight: 700;
            font-size: 16px;
            margin: 0;
            letter-spacing: .2px;
    }
    .item span {
            display: flex;
            flex-direction: column;
    }
    .item span p {
            font-size: 13px;
            margin: 0 12px 0 0;
            color: #B0B0B0;
            font-weight: 600;
    }

    .item span span {
        display: flex;
        flex-direction: row;
    }

    .item:hover{
            padding: 12px 12px;
            cursor: pointer;
            animation: move-right linear .2s;
            background: #FBF7F0;
            border-radius: 8px;
        }
    @keyframes move-right {
        from {
            padding: 12px 0;
        }
        to {
            padding: 12px 12px;
        }
    }
</style>
