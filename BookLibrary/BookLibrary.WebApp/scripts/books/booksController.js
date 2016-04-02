app.controller('BooksController', function ($scope, BooksFactory) {

    $scope.books = BooksFactory.getAllBooks();

    $scope.toggleFavorite = function (book) {
        book.Favorite = !book.Favorite;

        BooksFactory.favoriteBook(book);
    };

});