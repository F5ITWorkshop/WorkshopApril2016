app.controller('BookController', function ($scope, $routeParams, BooksFactory) {

    var bookId = $routeParams.id;

    $scope.book = BooksFactory.getBook(bookId);

});