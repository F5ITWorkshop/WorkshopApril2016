app.service('BooksService', function () {
    
    this.validateISBN = function (ISBN) {

        // strip possible dashes
        ISBN = ISBN.replace(new RegExp('-', 'g'), '');

        var checkDigit = calculateCheckDigit(ISBN.substring(0,12));

        return checkDigit == ISBN[ISBN.length - 1];
    };

    function calculateCheckDigit(infoDigits) {
        var sum = 0;

        for (var i = 0; i < infoDigits.length; i++) {
            if (i % 2 == 0) {
                sum += Number(infoDigits[i]);
            } else {
                sum += Number(infoDigits[i]) * 3;
            }
        }

        return 10 - (sum % 10);
    }

});