using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BookLibrary.DataModel;
using System.ServiceModel.Web;
using System.Net;
using BookLibrary.DomainLogic;

namespace BookLibrary.REST
{
    public class BooksRest : IBooksRest
    {
        private readonly BookService _bookService = new BookService();
        public List<Book> GetAllBooks()
        {
            try
            {
                return _bookService.GetAllBooks();
            }
            catch (Exception ex)
            {
                throw new WebFaultException<string>("An error occured: " + ex.Message, HttpStatusCode.InternalServerError);
            }
        }

        public Book GetBook(string bookId)
        {
            try
            {
                return _bookService.GetBook(bookId);
            }
            catch (Exception ex)
            {
                throw new WebFaultException<string>("An error occured: " + ex.Message, HttpStatusCode.InternalServerError);
            }
        }

        public string SaveBook(Book book)
        {
            try
            {
                return _bookService.SaveBook(book);
            }
            catch (Exception ex)
            {
                throw new WebFaultException<string>("An error occured: " + ex.Message, HttpStatusCode.InternalServerError);
            }
        }
    }
}
