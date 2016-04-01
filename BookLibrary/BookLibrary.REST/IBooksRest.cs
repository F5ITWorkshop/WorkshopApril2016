using BookLibrary.DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;
using System.Threading.Tasks;

namespace BookLibrary.REST
{
    [ServiceContract]
    public interface IBooksRest
    {
        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/Books", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Bare)]
        List<Book> GetAllBooks();

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "/Book/{bookId}", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Bare)]
        Book GetBook(string bookId);

        [OperationContract]
        [WebInvoke(Method = "POST", UriTemplate = "/Book", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Bare)]
        string SaveBook(Book organization);
    }
}
