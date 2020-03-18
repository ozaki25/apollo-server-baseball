const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    getBooks: [Book]
    getAuthors: [Author]
  }

  type Book {
    title: String
    author: Author
  }

  type Author {
    name: String
    books: [Book]
  }
`;

module.exports = typeDefs;
