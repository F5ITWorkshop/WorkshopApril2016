app.directive('checkIsbn', function (BooksService) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs, controller) {
            // get initial values
            var ISBNText = attrs.checkIsbn;
            element.append(ISBNText);            

            // update element content if value changes
            attrs.$observe('checkIsbn', function (newValue) {
                ISBNText = newValue;
                element.empty();
                element.append(ISBNText);
            });

            if (ISBNText.indexOf('ISBN') > -1) {
                var checkerElement = angular.element('<span class="glyphicon glyphicon-refresh isbn-glyph" style="cursor: pointer"></span>');

                checkerElement.bind('click', function () {
                    checkerElement.children().remove();

                    var isbnValid = BooksService.validateISBN(ISBNText);                   

                    if (isbnValid) {
                        checkerElement.append('<span class="glyphicon glyphicon-ok-circle isbn-glyph"></span>');
                    } else {
                        checkerElement.append('<span class="glyphicon glyphicon-remove-circle isbn-glyph"></span>');
                    }            

                });

                element.after(checkerElement);
            }

            
        }
    }
});