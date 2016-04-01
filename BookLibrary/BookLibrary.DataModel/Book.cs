using System.Runtime.Serialization;

namespace BookLibrary.DataModel
{
    [DataContract]
    public class Book
    {
        [DataMember]
        public int Id { get; set; }

        [DataMember]
        public string ISBN { get; set; }

        [DataMember]
        public string Title { get; set; }

        [DataMember]
        public string Publisher { get; set; }

        [DataMember]
        public string Author { get; set; }

        [DataMember]
        public string CoverImage { get; set; }

        [DataMember]
        public string Summary { get; set; }

        [DataMember]
        public bool Favorite { get; set; }
    }
}
