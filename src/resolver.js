const books = require('../data/books');

const resolver = {
  Query: {
    getBooks: () => books,
    getAuthors: () => [],
  },
  Mutation: {
    addBook: (_, { title, author }) => console.log({ a, b }),
  },
};

module.exports = resolver;
