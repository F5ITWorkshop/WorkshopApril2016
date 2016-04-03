describe('BooksService', function () {
    
    beforeEach(module('app'));

    var BooksService;

    beforeEach(inject(function (_BooksService_) {
        BooksService = _BooksService_;
    }));

    describe('validate ISBN', function () {

        it('should pass with valid ISBN', function () {

            var ISBN = '9780451532114';

            var validationResult = BooksService.validateISBN(ISBN);

            expect(validationResult).toBe(true);

        });
 
        it('should fail with invalid ISBN', function () {

            var ISBN = '9780451532113';

            var validationResult = BooksService.validateISBN(ISBN);

            expect(validationResult).toBe(false);

        });

        it('should fail with wrong length ISBN', function () {
            var ISBN = '97804515321130'; // 14 chars

            var validationResult = BooksService.validateISBN(ISBN);

            expect(validationResult).toBe(false);
        });

        it('should pass with valid ISBN prefixed by ISBN-', function () {

            var ISBN = 'ISBN-9780451532114';

            var validationResult = BooksService.validateISBN(ISBN);

            expect(validationResult).toBe(true);

        });

        it('should fail with valid ISBN prefixed by something other than ISBN-', function () {

            var ISBN = 'ISBN-CODE-9780451532114';

            var validationResult = BooksService.validateISBN(ISBN);

            expect(validationResult).toBe(false);

        });


    });

});