
import firebase from 'firebase'
import _ from 'lodash'; 
import Vue from 'vue'

export default {
    setAuthId (state, id) {
        state.authId = id
    },
    setunSubscribeAuthObserver (state, unsubscribe) {
        state.unSubscribeAuthObserver = unsubscribe
    },

    addBookRequest (state, bookId){
        state.bookRequests.push(bookId)
        Vue.set(state.subscribers[state.authId]['requested'], bookId, bookId)
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
    removeBookRequestDB (state, book) {
        const item = state.subscribers[state.authId].requested
        for(var i in item)
            if (item[i] == book)
                firebase.database().ref("subscribers/"+state.authId).child("requested").child(i).remove()
    },
    setItem (state, {item, id, resource}){
        item['.key'] = id;
        Vue.set(state[resource], id, item)
    }
}