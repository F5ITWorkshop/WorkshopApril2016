app.controller('BooksController', function ($scope, $filter, BooksFactory) {

    $scope.title = 'Book library';
    $scope.search = { text: '' };
    $scope.showOnlyFavorites = false;

    var allBooks = [];
    $scope.books = [];

    allBooks = BooksFactory.getAllBooks();

    // first phase this works
    $scope.books = allBooks;

    // second phase this will work
    //allBooks.$promise.then(function () {
    //    $scope.books = allBooks;
    //});

    $scope.toggleFavorite = function (book) {
        book.Favorite = !book.Favorite;

        BooksFactory.favoriteBook(book);

        // update backup used for filtering
        allBooks = angular.copy($scope.books);
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