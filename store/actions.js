import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource);
/*eslint-disable*/
export default {
    async getAllBooks(context) {
        await Vue.http.post('http://localhost:4000/graphql', {
                query: `{ 
                    getBooks { 
                        title
                        description
                        id
                    } 
                }`
            }, {emulateJSON:true}).then(
                response => {
                    context.commit('GET_ALL_BOOKS', response.data.data.getBooks);
                },
                response => {
                    console.log(error);
            });    
    },
    async addNewBook(context, payload) {
        let title = payload.description;
        let description = payload.title;
        let id = '_' + Math.random().toString(36).substr(2, 9);
        console.log(id, " id for new book");
        
        await Vue.http.post('http://localhost:4000/graphql', {
            query: `
                mutation AddNewBook($title: String!, $description: String!, $id: ID!){
                addNewBook(title: $title, description: $description, id: $id){
                    title
                    description
                    id
                }
            }`,
            variables:{
                title: title,
                description: description,
                id: id
            }
        },
        // variables,  
        // {emulateJSON:true}
    ).then(
            response => {
                context.commit('ADD_NEW_BOOK', response.data.data);
            },
            response => {
                console.log(error);
        });
    },
    async deleteBook(context, payload) {
        await Vue.http.post('http://localhost:4000/graphql', {
            query: `
                mutation DeleteBook($id: ID!){
                deleteBook(id: $id){
                    id
                }
            }`,
            variables:{
                id: payload,
            }
        },
    ).then(
            response => {
                console.log(response.data.data);
                
                // context.commit('DELETE_BOOK', response.data.data);
            },
            response => {
                console.log(error);
        });
    }
}