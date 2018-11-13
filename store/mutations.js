export default {
    GET_ALL_BOOKS: (state, payload) => {
        state.allBooks = payload;
        console.table(state.allBooks);
    },
    ADD_NEW_BOOK: (state, payload) => {
        state.allBooks.push(payload.addNewBook);
    },
    DELETE_BOOK: (state, payload) => {
        console.log('DELETE_BOOK');
        
    }
}