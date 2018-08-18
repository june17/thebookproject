import Vuex from 'vuex'
import Vue from 'vue'
import _ from 'lodash'; 
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        subscribers: {},
        books: {},
        admin: {},
        bookRequests: [],
        authId: 's1',
       // bookRequests
            //add subscriberId, bookId
    },

    getters: {
        authUser (state) {
            //return state.subscribers[state.authId]
            return {}
        }
         
    },
    actions: {
        fetchBooks (context) {
            firebase.database().ref('books').on('value', snapshot => {
                context.commit( 'writeBooks', snapshot.val())
            })
        },
        fetchSubscribers (context) {
            firebase.database().ref('subscribers').on('value', snapshot => {
                context.commit( 'writeSubscribers', snapshot.val())
            })
        }
    
    },

    mutations: {
        addSubToBookRequestsDB (state, bookId) {
            const bookSelected = state.subscribers[state.authId].requested.find(item => item === bookId)
            if(!bookSelected && state.subscribers[state.authId].requested.length < state.subscribers[state.authId].limit ){
                state.subscribers[state.authId].requested.push(bookId) //bookrequested by subscriber data
                state.bookRequests.push(bookId) //bookrequests object
                console.log(state.bookRequests);
                console.log("value added "+  state.subscribers[state.authId].requested)
            } else {
                console.log("already exists or limit reached")
            }    
        },
        writeBooks (state, books) {
            state.books = books
        },
        writeSubscribers (state, subscribers) {
            state.subscribers = subscribers
        }
    }
})