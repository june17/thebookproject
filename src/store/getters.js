
export default {
    authUser (state) {
        return state.authId ? state.subscribers[state.authId] : null
    },
    readingBooksList (state) {  
        const data = []
        for (var i in state.subscribers[state.authId].reading) {
            data.push(state.books[state.subscribers[state.authId].reading[i]])
        }
        return data
    },
    requestedBooksList (state) {  
        const data = []
        for (var i in state.subscribers[state.authId].requested) {
            data.push(state.books[state.subscribers[state.authId].requested[i]])
        }
        return data
    },
    shit(state) {
        console.log('shit')
    },
    booksLimitCount: state => id => state.subscribers[id].limit,
}