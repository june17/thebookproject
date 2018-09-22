<template>
    <div class="container">
      <form @submit.prevent="fetchBook" class="card card-form">
        <h1 class="text-center">Add book by ISBN</h1>
        
        <div class="form-group">
          <label for="name">ISBN</label>
          <input v-model="isbn" type="text" placeholder="Enter ISBN number" class="form-input">
          <button type="submit" class="btn-blue">Search</button>
        </div>
      </form>
         <!-- {{this.results.items[0]['volumeInfo'].title}} -->
        <div @submit.prevent="addBook" v-if="apiData">
            <form class="card card-form">
                <div class="form-group">
                    <label for="name">Book Title</label>
                    <input v-model="book.title" type="text" class="form-input">
                </div>
                <div class="form-group">
                    <label for="name">Book Subtitle</label>
                    <input type="text" class="form-input" v-model="book.subTitle">
                </div>
                <div class="form-group">
                    <label for="name">Description</label>
                    <input v-model="book.description" type="text" class="form-input">
                </div>
                <div class="form-group">
                    <label for="name">Authors</label>
                    <input type="text" class="form-input" v-model="book.authors">
                </div>
                <div class="form-group">
                    <label for="name">Publisher</label>
                    <input type="text" class="form-input" v-model="book.publisher">
                </div>
                <div class="form-group">
                    <label for="name">Published on</label>
                    <input type="date" class="form-input" v-model="book.publishedDate">
                </div>
                <div class="form-group">
                    <label for="name">Numbers</label>
                    <input type="number" class="form-input" v-model="numbers">
                </div>
                
                <img type="number" :src="this.book.thumbnail" width="150px">
                
                <div class="form-actions">
                    <button type="submit" class="btn-blue btn-block">Register</button>
                </div>
            </form>
        </div>
        <div v-else>
            <h4 style="margin:50px 0; color: red; text-align:center">Sorry, no data found!</h4>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import firebase from 'firebase'
export default {
    data () {
        return {
            results: null,
            isbn: null,
            apiData:false,
            book: {
                title: null,
                subTitle: null,
                authors: null,
                printType: null,
                description: null,
                pageCount: null,
                publisher: null,
                publishedDate: null,
                smallThumbnail: null,
                thumbnail: null
            },
            numbers: 1
        }
    },
    methods: {
    fetchBook () {
        return new Promise((resolve,reject) => {
                            resolve('https://www.googleapis.com/books/v1/volumes?q=isbn:'+this.isbn)
                            })
                .then((val) => {
                    axios.get(val)
                        .then(response => {
                            this.results = response.data 
                            console.log(this.results)
                            if(this.results.totalItems) {
                                this.apiData = true
                                var item = this.results.items[0]["volumeInfo"]
                                this.book = {
                                    title: item["title"] ? item["title"] : null,
                                    thumbnail: item["imageLinks"] ? item["imageLinks"]["thumbnail"] : null,
                                    description: item["description"] ? item["description"] : null,
                                    pageCount: item["pageCount"] ? item["pageCount"] : null,
                                    publisher: item["publisher"] ? item["publisher"] : null,
                                    publishedDate: item["publishedDate"] ? item["publishedDate"] : null,
                                    authors: item['authors'] ? Object.values(item["authors"]) : null,
                                    subTitle : item["subtitle"] ? item["subtitle"] : null
                                }
                            } else {
                                this.apiData = false
                                this.book = {
                                            title: null,
                                            subTitle: null,
                                            authors: null,
                                            description: null,
                                            pageCount: null,
                                            publisher: null,
                                            publishedDate: null,
                                            smallThumbnail: null,
                                            thumbnail: null
                                        }
                            }
                        })
                    .catch(error => console.log(error))
                })
        },
    addBook () {
        console.log(this.isbn)
        this.$store.dispatch('addBookToDB', {book: this.book, isbn: this.isbn})
        this.book = {
                    title: null,
                    subTitle: null,
                    authors: null,
                    description: null,
                    pageCount: null,
                    publisher: null,
                    publishedDate: null,
                    smallThumbnail: null,
                    thumbnail: null
                }
        this.isbn = ''
        console.log('hi'+this.$store.state.booksDB)
        }
    }
}
</script>
<style scoped>
input {
    width: 100%
}
</style>


