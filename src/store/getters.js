
export default {
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
}