var app = angular.module('app', ['ngRoute', 'ngResource']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/books', {
            templateUrl: 'scripts/books/booksPartial.html',
            controller: 'BooksController'
        })

        .when('/book/:id', {
            templateUrl: 'scripts/books/bookPartial.html',
            controller: 'BookController'
        })

        .otherwise('/books');
});