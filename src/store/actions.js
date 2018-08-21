
import firebase from 'firebase'
import _ from 'lodash'; 

export default {
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
    },

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
    },

    removeBookRequest(context,book) {
        // console.log(book)
        const bookSelected = _.find(context.state.books, function(item){
                                    return item.bookId === book.bookId
                                })
        if (bookSelected) {
            context.commit('removeBookRequestDB', book.bookId)
        }
    }

}