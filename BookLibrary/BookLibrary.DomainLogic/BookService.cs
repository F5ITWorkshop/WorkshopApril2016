using BookLibrary.DataAccess;
using BookLibrary.DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookLibrary.DomainLogic
{
    public class BookService
    {
        private readonly BookDao _bookDao = new BookDao();
        public Book GetBook(string bookId)
        {
            return _bookDao.GetBook(bookId);
        }

        public string SaveBook(Book book)
        {
            return _bookDao.SaveBook(book);
        }

        public List<Book> GetAllBooks()
        {
            return _bookDao.GetAllBooks();
        }
    }
}
