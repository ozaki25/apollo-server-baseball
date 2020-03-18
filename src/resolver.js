const books = require('../data/books');

const resolver = {
  Query: {
    books: () => books,
  },
};

module.exports = resolver;
