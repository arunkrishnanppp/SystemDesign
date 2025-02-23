import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// const authors = [
//   {
//     id: 1234,
//     title: 'Kate Chopin'
//   },
//   { id: 34534, title: 'Paul Auster' }
// ];
// const books = [
//   { id: 1234, title: 'The Awakening', author: authors[0] },
//   { id: 56456, title: 'City of Glass', author: authors[1] }
// ];

const data = {
  authors: [
    {
      id: 1234,
      title: 'Kate Chopin',
      books: [101, 102]
    },
    { id: 34534, title: 'Paul Auster', books: [201, 202] }
  ],
  books: [
    { id: 101, title: 'The Awakening', authorId: 1234, publishedYear: 2019 },
    { id: 102, title: 'The Breaking Bad', authorId: 1234, publishedYear: 2019 },

    { id: 201, title: 'City of Glass', authorId: 34534, publishedYear: 2019 },
    { id: 202, title: 'Spider Man', authorId: 34534, publishedYear: 2019 }
  ]
};
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.


  type Author {
    id: ID!
    title: String!
    books : [Book]
  }
  type Book {
    id : ID!
    title: String!
    author: Author!
    publishedYear: Int
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).

  #All the method to get data should be in Query
  type Query {
    authors: [Author]
    books: [Book]
  }


  type Mutation{
  addBook(title:String!, publishedYear: Int , authorId: ID!): Book!
  
  }
`;
const resolvers = {
  Book: {
    author: (parent, args, context, info) => {
      // console.log(parent.authorId);
      return data.authors.find((author) => author.id === parent.authorId);
    }
  },
  Author: {
    books: (parent, args, context, info) => {
      console.log(parent);
      console.log('All books', data.books);
      // const books = data.books.filter((book) => book.authorId == parent.id);
      const books = [];
      parent.books.forEach((bookId) => {
        books.push(data.books.find((book) => book.id == bookId));
      });
      console.log('filtered books', books);
      return books;
    }
  },

  Query: {
    /* books: () => {
      //Book resolver
      const response = data.books.map((book) => {
        book['author'] = data.authors.find((author) => author.id === book.authorId);
        return book;
      });
      // console.log(response);
      return response;
    },
    authors: () => {
      //auther resolver
      const response = data.authors.map((author) => {
        author['booksData'] = data.books.filter((book) => book.authorId === author.id);
        return author;
      });
      // console.log(response);

      console.log(data, 'DATA');
      return response;
    }
      */

    books: () => data.books,
    authors: () => data.authors
  },
  Mutation: {
    addBook: (parent, args, context, info) => {
      console.log({
        parent,
        args,
        context,
        info
      });
      const newBook = { ...args, id: data.books.length + 1 };
      data.books.push(newBook);
      console.log(data.books);
      return data.books.find((book) => newBook.id === book.id);
    }
  }
};
const server = new ApolloServer({
  typeDefs,
  resolvers
});

/*
Passing an ApolloServer instance to startStandaloneServer will do the following things

1. Create a express server which will provide the HTTP functionalities , since we need to make post request to Graphql server
2. Install ApolloServer instance as middleware
3. Prepare app to handle incoming request 
*/
const { url } = await startStandaloneServer(server);

console.log(`🚀 Server ready at ${url}`);
