app.factory('BooksFactory', function ($resource) {
    var BooksResource = $resource('REST/Book.svc/Books/:bookId');

    var booksFactory = {
        getAllBooks: getAllBooks,
        getBook: getBook,
    };

    function getAllBooks() {
        books = BooksResource.query();
        return books;
    }

    function getBook(bookId) {
        book = BooksResource.get({ bookId: bookId })
        return book;
    }

    return booksFactory;
});