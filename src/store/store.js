import Vuex from 'vuex'
import Vue from 'vue'
import sourceData from '@/data'
import _ from 'lodash';   

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        ...sourceData,
        authId: 's1',
       // bookRequests
            //add subscriberId, bookId
    },

    getters: {
        authUser (state) {
            return state.subscribers[state.authId]
        }
    },
    actions: {
        requestBook (context, book) {
            if ( book.inventory > 0 ) {
                const bookSelected = _.find(context.state.books, function(item){
                    return item.bookId === book.bookId
                })
                if (bookSelected) {
                    context.commit('addSubToBookRequestsDB', book.bookId)
                    context.commit('addToSubRequestedDB')
                }
            }
        }
    },

    mutations: {
        addSubToBookRequestsDB (state, bookId) {
            const bookSelected = state.subscribers[state.authId].requested.find(item => item === bookId)
            if(!bookSelected && state.subscribers[state.authId].requested.length < state.subscribers[state.authId].limit ){
                state.subscribers[state.authId].requested.push(bookId)
                // console.log("value added "+  state.subscribers[state.authId].requested.length)
            } else {
                console.log("already exists or limit reached")
            }    
        },
        addToSubRequestedDB (state) {
            console.log(" ")
        }
    }
})