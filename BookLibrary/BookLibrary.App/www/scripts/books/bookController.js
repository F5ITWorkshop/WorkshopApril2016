app.controller('BookController', function ($scope, $routeParams, BooksFactory, BooksService) {

    var bookId = $routeParams.id;

    $scope.book = BooksFactory.getBook(bookId);

    $scope.toggleFavorite = function (book) {
        book.Favorite = !book.Favorite;

        BooksFactory.favoriteBook(book);
    };
});