<template>
    <div>
        <div class="bookContentBg"></div>
        <div class="container">
            <div class="row  bookContent" >
                <section class="col-md-3 userProfile">
                    <div class="userInfo">
                        <img src="/static/images/Bitmap1.png" height="40px" width="40px">
                        <span>
                            <h4>Stanley Gray</h4>
                        </span>   
                    </div>
                    <p>Read 5 books</p> 
                </section>
                <section class="col-md-8" style="padding-left: 6%; padding-right: 0;">
                    <div class="title">
                        <h3 class="sectionTitle">Add Book</h3>
                    </div>
                    <ul class="adminActions">
                    <li class="addBook">
                        <input type="text" placeholder="Stock code" class="inputText">
                        <input type="text" placeholder="Book name" class="inputText">
                        <input type="text" placeholder="Author name" class="inputText">
                        <h6>Book Category</h6>
                        </li> 
                    </ul>
                </section>
            </div>      
        </div>
    </div>
</template>
<script>
import UserShow from '@/components/UserShow'

export default {
    name: 'AddBook'
}
</script>
<style scoped>
.addBook {
        margin: 20px 0;
        padding: 36px 40px;
        background: #ffffff;
        box-shadow: 0 2px 10px 2px rgba(0,0,0,.05);
    }
</style>
