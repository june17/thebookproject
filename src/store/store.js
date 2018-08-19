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
        },
        navBarStats (state) {

        },
        requestedBooks (state, getters) {
            const data = []
            for ( var i in state.subscribers[state.authId].requested) {
                data.push(state.books[state.subscribers[state.authId].requested[i]])
            }
            return data
        }
         
    },
    actions: {
        fetchBooks (context) {
            console.log ("📕")
            firebase.database().ref('books').on('value', snapshot => {
                context.commit( 'writeBooks', snapshot.val())
            })
        },
        fetchSubscribers (context) {
            console.log ("🙋‍")
            firebase.database().ref('subscribers').on('value', snapshot => {
                context.commit( 'writeSubscribers', snapshot.val())
            })
        }
        ,
        requestBook (context, book) {
            if ( book.inventory > 0 ) {
                const bookSelected = _.find(context.state.books, function(item){
                                            return item.bookId === book.bookId
                                        })
                if (bookSelected) {
                    context.commit('addSubToBookRequestsDB', book.bookId)
                    // console.log("🎁", book.bookId)
                }
            }
        }
    },

    mutations: {
        addSubToBookRequestsDB (state, bookId) {
            const bookSelected = _.find(state.subscribers[state.authId].requested, function(item) {
                                            return item === bookId
                                        })
            console.log('😹'+bookSelected)
            var noOfRequests = _.size(state.subscribers[state.authId].requested)
            console.log(noOfRequests)
            console.log(state.subscribers[state.authId].limit)

            if(!bookSelected && noOfRequests < state.subscribers[state.authId].limit ){
                state.bookRequests.push(bookId) //bookrequests object
                firebase.database().ref("subscribers/"+state.authId).child("requested").push(bookId) //add new item to requests
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