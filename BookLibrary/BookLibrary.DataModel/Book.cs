namespace BookLibrary.DataModel
{
    public class Book
    {
        public int Id { get; set; }

        public string ISBN { get; set; }

        public string Title { get; set; }

        public string Publisher { get; set; }

        public string Author { get; set; }

        public string CoverImage { get; set; }

        public string Description { get; set; }
    }
}
