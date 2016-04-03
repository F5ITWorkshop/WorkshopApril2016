app.controller('BooksController', function ($scope, $filter, BooksFactory) {

    $scope.title = 'Books';

    $scope.search = { text: '' };

    $scope.showOnlyFavorites = false;

    $scope.books = BooksFactory.getAllBooks();

    var allBooks = [];

    // first phase this works
    //allBooks = angular.copy($scope.books);

    // second phase this will work
    $scope.books.$promise.then(function () {
        allBooks = angular.copy($scope.books);
    });

    $scope.toggleFavorite = function (book) {
        book.Favorite = !book.Favorite;

        BooksFactory.favoriteBook(book);
    };

    $scope.filterByTitle = function (book) {
        if ($scope.search.text.length > 0) {
            if ((book.Title).toLowerCase().indexOf(($scope.search.text).toLowerCase()) < 0) {
                return false
            }
        }

        return true;
    };

    $scope.toggleShowOnlyFavorites = function () {
        $scope.showOnlyFavorites = !$scope.showOnlyFavorites;
    
        if ($scope.showOnlyFavorites) {
            $scope.books = $filter('filter')(allBooks, { 'Favorite': $scope.showOnlyFavorites });
        } else {
            $scope.books = allBooks;
        }
        
    };

});