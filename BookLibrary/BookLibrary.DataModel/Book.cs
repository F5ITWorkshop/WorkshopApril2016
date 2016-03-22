using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookLibrary.DataModel
{
    public class Book
    {
        public string ISBN { get; set; }

        public string Title { get; set; }

        public string Publisher { get; set; }

        public string Author { get; set; }
    }
}
