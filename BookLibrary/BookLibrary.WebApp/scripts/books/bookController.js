app.controller('BookController', function ($scope, $routeParams, BooksFactory, BooksService) {

    var bookId = $routeParams.id;

    $scope.book = BooksFactory.getBook(bookId);

});