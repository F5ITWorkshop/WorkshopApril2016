IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'GetAllBooks') ) 
DROP PROCEDURE GetAllBooks
GO
Create procedure GetAllBooks
AS
BEGIN
    SELECT 
	   [BOOK_ID]
      ,[BOOK_ISBN]
      ,[BOOK_TITLE]
      ,[BOOK_PUBLISHER]
      ,[BOOK_AUTHOR]
      ,[BOOK_COVER_IMAGE]
      ,[BOOK_SUMMARY]
      ,[BOOK_FAVORITE]
	FROM 
	   [dbo].[BOOK]
END
GO

IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'GetBook') ) 
DROP PROCEDURE GetBook
GO
Create procedure GetBook(@bookId as int)
AS
BEGIN
    SELECT 
	   [BOOK_ID]
      ,[BOOK_ISBN]
      ,[BOOK_TITLE]
      ,[BOOK_PUBLISHER]
      ,[BOOK_AUTHOR]
      ,[BOOK_COVER_IMAGE]
      ,[BOOK_SUMMARY]
      ,[BOOK_FAVORITE]
	FROM 
	   [dbo].[BOOK] book
	WHERE
	   book.BOOK_ID = @bookId
END
GO

IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'SetIsFavorite') ) 
DROP PROCEDURE SetIsFavorite
GO
Create procedure SetIsFavorite(@bookId as int, @isFavorite as bit)
AS
BEGIN
	UPDATE
		[dbo].[BOOK]
	SET
        [BOOK_FAVORITE] = @isFavorite
	WHERE
	   book.BOOK_ID = @bookId
END
GO