
import firebase from 'firebase'
import _ from 'lodash'; 

export default {
    //registration
    createUser ({state, commit}, {id, email, name, username, avatar = null}) {
        return new Promise((resolve, reject) => {
            const registeredAt = Math.floor(Date.now() / 1000)
            const subId = id
            username = username.toLowerCase()
            email = email.toLowerCase()
            const user = {subId, avatar, email, name, username, registeredAt}
            firebase.database().ref('subscribers').child(subId).set(user)
                .then(() => {
                    commit('setItem', {resource: 'subscribers', id: subId, item: user})
                    resolve(state.subscribers[subId])
                })
        })
    },

    signInWithEmailAndPassword (context, {email, password}) {
        return firebase.auth().signInWithEmailAndPassword(email, password)
    },
    
    signInWithGoogle ({dispatch}) {
        const provider = new firebase.auth.GoogleAuthProvider()
        return firebase.auth().signInWithPopup(provider)
            .then(data => {
            const subscriber = data.user
            firebase.database().ref('subscribers').child(subscriber.uid).once('value', snapshot => {
                if (!snapshot.exists()) {
                return dispatch('createUser', {id: subscriber.uid, name: subscriber.displayName, email: subscriber.email, username: subscriber.email, avatar: subscriber.photoURL})
                    .then(() => dispatch('fetchAuthUser'))
                }
            })
        })
    },
    
    signOut ({commit}) {
        return firebase.auth().signOut()
            .then(() => {
                commit('setAuthId', null)
            })
    },

    initAuthentication ({dispatch, commit, state}){
        return new Promise ((resolve, reject) => {
            if(state.unSubscribeAuthObserver) {
                state.unSubscribeAuthObserver()
            }
            const unsubscribe = firebase.auth().onAuthStateChanged(user => {
                                    console.log('user has changed')
                                    if (user) {
                                        dispatch('fetchAuthUser')
                                            .then(dbUser => resolve(dbUser))
                                    }else{
                                        resolve(null)
                                    }
                                })
            commit('setunSubscribeAuthObserver', unsubscribe)
            })
    },
    
    registerUserWithEmailAndPassword ({dispatch}, {email, name, username, password, avatar = null}) {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => { 
                return dispatch('createUser', {id: user.user.uid, email, name, username, password, avatar}) 
            })
            .then(() => {
                return dispatch('fetchAuthUser')
            })
    }, 

    fetchAuthUser ({dispatch, commit}) {
        console.log('😦'+firebase.auth().currentUser.uid)
        const subId = firebase.auth().currentUser.uid
        return new Promise((resolve, reject) => {
            // check if user exists in the database
            firebase.database().ref('subscribers').child(subId).once('value', snapshot => {
            if (snapshot.exists()) {
                return dispatch('fetchSubscriber', {id: subId})
                .then(subscriber => {
                    commit('setAuthId', subId)
                    resolve(subscriber)
                })
            } else {
                resolve(null)
            }
            })
        })
    },

    createReview({commit,state}, review){
        const reviewId = firebase.database().ref('posts').push().key
        review.subId = state.authId
        review.publishedAt = Math.floor(Date.now() / 1000)
        
        const updates = {}
        updates[`books/${review.bookId}/reviews/${reviewId}`] = review 
        updates[`subscribers/${review.subId}/reviews/${reviewId}`] = reviewId
        updates[`subscribers/${review.subId}/books/${reviewId}`] = review.bookId
        firebase.database().ref().update(updates)
            .then(()=> {
                commit('addReviewToBook' , {bookId: review.bookId, review: review})
                console.log('🤡'+ state.books[review.bookId]['reviews'])
            })

    },
    fetchBooks (context) {
        console.log ("🎀📕")
        return new Promise((resolve, reject) => {
            firebase.database().ref('books').on('value', snapshot => {
                context.commit( 'writeBooks', snapshot.val())
            })
        })
    },

    fetchAllSubscribers({commit}){
        console.log('🔥'+ '👻 all')
        return new Promise((resolve, reject)=>{
            firebase.database().ref('subscribers').once('value', snapshot => {
                const subscriberObject = snapshot.val()
                Object.keys(subscriberObject).forEach(subId => {
                    const subscriber = subscriberObject[subId]
                    commit('setItem', {resource: 'subscribers', id: subId, item: subscriber})
                })
            })
        })
    },

    fetchBook(context , {id}) {
        return context.dispatch('fetchItem', {resource: 'books', id , emoji: '‍‍‍📕' })
    },

    fetchAllBooks({commit}) {
        console.log('🔥'+ '📕 all')
        return new Promise((resolve, reject)=>{
            firebase.database().ref('books').once('value', snapshot => {
                const booksObject = snapshot.val()
                Object.keys(booksObject).forEach(bookId => {
                    const book = booksObject[bookId]
                    commit('setItem', {resource: 'books', id: bookId, item: book})
                })
            })
        })
    },

    fetchSubscriber(context, {id}) {
        console.log('🔥'+ '👻')
        return context.dispatch('fetchItem', {resource: 'subscribers', id , emoji: '‍‍‍🙋‍♂️' })
    },

    fetchItem ({state, commit}, {id, emoji, resource}) {
        console.log('🔥'+ emoji+ id)
        return new Promise ((resolve, reject) => {
            firebase.database().ref(resource).child(id).once('value', snapshot => {
                commit('setItem', {resource, id: snapshot.key, item: snapshot.val()})
                resolve(state[resource][id])
            })
        })
    },

    fetchItems ({dispatch},{ids, resource, emoji}){
        ids = Array.isArray(ids) ? ids: Object.keys(ids)
        return Promise.all(ids.map(id => dispatch('fetchItem', {resource, id , emoji})))
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
    },
    addBookToDB({commit}, {book, isbn}){
        return new Promise ((resolve, reject) => {
            const newPostKey = firebase.database().ref().child('booksDB').push().key;     
            const updates = {}
            book.isbn = isbn
            updates[`/booksDB/${newPostKey}`] = book
            firebase.database().ref().update(updates)
                .then(()=> {
                    commit('setItem' , {resource: 'booksDB', item: book, id: newPostKey})
                })
        })
    }

}