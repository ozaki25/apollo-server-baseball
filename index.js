const { ApolloServer, gql } = require('apollo-server');
const book = require('./data/book');

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;
