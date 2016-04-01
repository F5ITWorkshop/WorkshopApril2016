using BookLibrary.DataModel;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookLibrary.DataAccess
{
    public class BookDao
    {
        public List<Book> GetAllBooks()
        {
            var connectionString = ConfigurationManager.ConnectionStrings["ConnString"].ConnectionString;
            using (var conn = new SqlConnection(connectionString))
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "GetAllBooks";
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    var reader = cmd.ExecuteReader();
                    List<Book> books = new List<Book>();
                    while (reader.Read())
                    {
                        var book = new Book();
                        book.Id = reader.GetInt32(0);
                        book.ISBN = reader.GetString(1);
                        book.Title = reader.GetString(2);
                        book.Publisher = reader.GetString(3);
                        book.Author = reader.GetString(4);
                        book.CoverImage = reader.GetString(5);
                        book.Summary = reader.GetString(6);
                        book.Favorite = reader.GetBoolean(7);

                        books.Add(book);
                    }
                    return books;
                }
            }
        }

        public Book GetBook(string bookId)
        {
            var connectionString = ConfigurationManager.ConnectionStrings["ConnString"].ConnectionString;
            using (var conn = new SqlConnection(connectionString))
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "GetBook";
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.Add(new SqlParameter("@bookId", bookId));
                    var reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                        var book = new Book();
                        book.Id = reader.GetInt32(0);
                        book.ISBN = reader.GetString(1);
                        book.Title = reader.GetString(2);
                        book.Publisher = reader.GetString(3);
                        book.Author = reader.GetString(4);
                        book.CoverImage = reader.GetString(5);
                        book.Summary = reader.GetString(6);
                        book.Favorite = reader.GetBoolean(7);

                        return book;
                    }
                    return null;
                }
            }
        }

        public string SaveBook(Book book)
        {
            var connectionString = ConfigurationManager.ConnectionStrings["ConnString"].ConnectionString;
            using (var conn = new SqlConnection(connectionString))
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "SetIsFavorite";
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.Add(new SqlParameter("@bookId", book.Id));
                    cmd.Parameters.Add(new SqlParameter("@isFavorite", book.Favorite));

                    var reader = cmd.ExecuteNonQuery();
                    return "Book was saved.";
                }
            }
        }
    }
}
