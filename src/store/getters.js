
export default {
    authUser (state) {
        return state.authId ? state.subscribers[state.authId] : null
    },
    adminBookRequests (state) {
        console.log('🥘'+ state.bookRequests)
        return state.bookRequests
    },
    readingBooksList (state) {  
        const data = []
        if(state.subscribers[state.authId].reading){
            Object.keys(state.subscribers[state.authId].reading).forEach(bookId => {
                const item = {}
                if(state.books[bookId]){
                    item.title = state.books[bookId].title
                }
                item.bookId = bookId
                item.grantedAt = state.subscribers[state.authId].reading[bookId].grantedAt
                data.push(item)
            }) 
        }
        return data
    },
    requestedBooksList (state) {
        const data = []
        if(state.subscribers[state.authId].requested){
            Object.keys(state.subscribers[state.authId].requested).forEach(bookId => {
                const item = {}
                if(state.books[bookId]){
                    item.title = state.books[bookId].title
                }
                item.bookId = bookId
                item.requestId = state.subscribers[state.authId].requested[bookId].requestId
                data.push(item)
            }) 
        } 
        return data
    },
    booksLimitCount: state => id => state.subscribers[id].limit,
}