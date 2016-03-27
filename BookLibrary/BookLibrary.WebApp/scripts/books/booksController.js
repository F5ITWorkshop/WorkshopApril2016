app.controller('BooksController', function ($scope, BooksFactory) {

    $scope.books = BooksFactory.getAllBooks();

});