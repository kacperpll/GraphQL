/*eslint-disable*/
const express = require('express')
const { graphql, buildSchema } = require('graphql')
const graphqlHTTP = require('express-graphql')
const cors = require('cors')
const Book = require('./book')

const schema = buildSchema(`
  type Query {
    language: String
    getBooks: [Book]
  }
  
  type Mutation {
      addNewBook(title: String!, description: String!, id:ID!): Book
      deleteBook(id: ID!): Book
  }


  type Book {
    title: String
    description: String
    id: ID
  }
`)

const books = [
  new Book('Harry Potter i Kamień Filozoficzny', 'Pierwsza część przygód Harrego Pottera w świecie Magii', 0),
  new Book('Harry Potter i Komnata Tajemnic', 'Druga część przygód Harrego Pottera', 1)
]

const rootValue = {
    language: () => 'Polski',
    
    getBooks: () => books,

    addNewBook: ({title, description, id}) => {
        const book = {
            title: title, 
            description: description,
            id: id
        }
        books.push(book);
        return book;
    },
    deleteBook: ({id}) => {
        books.some((item,index) => {
            if(item.id == id) {
                return books.splice(index, 1)
            }
        })
    },
}

const app = express()
app.use(cors())
app.options('*', cors());
app.use('/graphql', graphqlHTTP({
  rootValue, schema, graphiql: true
}))

app.listen(4000, () => console.log('Listening on 4000'))
