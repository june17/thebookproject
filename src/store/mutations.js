
import firebase from 'firebase'
import _ from 'lodash'; 

export default {

    addSubToBookRequestsDB (state, bookId) {
        const bookSelected = _.find(state.subscribers[state.authId].requested, function(item) {
                                        return item === bookId
                                    })
        var noOfRequests = _.size(state.subscribers[state.authId].requested)
        if(!bookSelected && noOfRequests < state.subscribers[state.authId].limit ){
            state.bookRequests.push(bookId) //bookrequests object
            firebase.database().ref("subscribers/"+state.authId).child("requested").push(bookId) //add new item to requests
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
    },
    removeBookRequestDB (state, book) {
        const item = state.subscribers[state.authId].requested
        for(var i in item)
            if (item[i] == book)
                firebase.database().ref("subscribers/"+state.authId).child("requested").child(i).remove()
    }
    
}