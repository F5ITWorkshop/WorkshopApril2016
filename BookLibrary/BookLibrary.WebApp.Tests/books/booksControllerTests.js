describe('BooksController', function () {

    beforeEach(module('app'));

    var $controller;

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;        
    }));

    describe('title', function () {

        var $scope;

        beforeEach(function () {
            $scope = {};
            $controller('BooksController', { $scope: $scope });
        });

        it('should be Books', function () {
            expect($scope.title).toBe('Books');            
        });
    });

    describe('filter by title function', function () {

        var $scope;

        beforeEach(function () {
            $scope = {};
            $controller('BooksController', { $scope: $scope });
        });

        it('should return true when search text is empty', function () {
            $scope.search = { text: '' };

            var book = { Title: 'War and Peace' };

            expect($scope.filterByTitle(book)).toBe(true);
        });

        it('should return true when title contains search text', function () {
            $scope.search = { text: 'War' };

            var book = { Title: 'War and Peace' };

            expect($scope.filterByTitle(book)).toBe(true);
        });

        it('should return false when title does not contain search text', function () {
            $scope.search = { text: 'Moby' };

            var book = { Title: 'War and Peace' };

            expect($scope.filterByTitle(book)).toBe(false);
        });
    });

});

