
import firebase from 'firebase'
import _ from 'lodash'; 
import Vue from 'vue'

export default {
    setAuthId (state, id) {
        state.authId = id
    },
    setBookRequests (state, book){
        state.bookRequests.push(book)
    },
    setunSubscribeAuthObserver (state, unsubscribe) {
        state.unSubscribeAuthObserver = unsubscribe
    },

    addToReadingList (state, {subId, book}) {
        if(!state.subscribers[subId]['reading']) {
            Vue.set(state.subscribers[subId], 'reading', {})
        }
        Vue.set(state.subscribers[subId]['reading'], book.bookId, book)
        Vue.delete(state.subscribers[subId]['requested'],book.bookId)
        Vue.delete(state.bookRequests[book.bookId])
    },

    addBookRequest (state, {bookId, subscriber}){
        console.log('🙀'+bookId)
        Vue.set(state.subscribers[state.authId]['requested'], bookId, subscriber)
    }, 

    addReviewToBook(state, {bookId, review}){
        if(!state.books[bookId]['reviews']){
            Vue.set(state.books[bookId], 'reviews', {})
        }
        Vue.set(state.books[bookId]['reviews'], review.reviewId, review) //add to book-reviews

        if(!state.subscribers[review.subId]['reviews']){
            Vue.set(state.subscribers[review.subId], 'reviews', {}) 
        }
        Vue.set(state.subscribers[review.subId]['reviews'], review.reviewId, review.reviewId)//add to subscriber-reviews
        
        if(!state.subscribers[review.subId]['books']){
            Vue.set(state.subscribers[review.subId], 'books', {})
        }
        Vue.set(state.subscribers[review.subId]['books'], review.reviewId, review.bookId) //add to subscriber-books
    },
    writeBooks (state, books) {
        state.books = books
    },
    setBook (state, {book, bookId} ) {
        Vue.set( state.books, bookId, book)
    },
    writeSubscribers (state, subscribers) {
        state.subscribers = subscribers
    },
    removeBookRequestDB (state, {bookId, requestId}) {
        Vue.delete(state.subscribers[state.authId]['requested'],bookId)
        Vue.delete(state['bookRequests'], requestId)         
    },
    setItem (state, {item, id, resource}){
        item['.key'] = id;
        Vue.set(state[resource], id, item)
    }
}