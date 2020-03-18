const books = require('../data/books');

const resolver = {
  Query: {
    getBooks: () => books,
    getAuthors: () => [],
  },
};

module.exports = resolver;
