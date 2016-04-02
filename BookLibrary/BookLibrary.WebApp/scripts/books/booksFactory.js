﻿app.factory('BooksFactory', function ($resource) {
    var BooksResource = $resource('REST/Book.svc/Books/:bookId');

    var booksFactory = {
        getAllBooks: getAllBooks,
        getBook: getBook,
        favoriteBook: favoriteBook
    };

    function getAllBooks() {
        books = BooksResource.query();
        return books;
    }

    function getBook(bookId) {
        book = BooksResource.get({ bookId: bookId })
        return book;
    }

    function favoriteBook(book) {
        BooksResource.save(book);
    };

    return booksFactory;
});