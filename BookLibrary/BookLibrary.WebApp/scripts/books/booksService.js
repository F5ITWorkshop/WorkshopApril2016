app.service('BooksService', function () {
    
    this.validateISBN = function (ISBN) {
        return true;
    };

    this.generateISBN = function () {
        return '987654-321-0';
    };

});