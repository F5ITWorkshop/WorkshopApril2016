app.factory('BooksFactory', function ($resource) {
    var booksFactory = {
        getAllBooks: getAllBooks,
        getBook: getBook,
        favoriteBook: favoriteBook
    };

    var books = [
            {
                Id: 1,
                ISBN: '9780451532114',
                Title: 'War and Peace',
                Author: 'Leo Tolstoy',
                Publisher: 'The Russian Messenger',
                CoverImage: 'war_and_peace.jpg',
                Summary: 'Tolstoy\'s epic masterpiece intertwines the lives of private and public individuals during the time of the Napoleonic wars and the French invasion of Russia. The fortunes of the Rostovs and the Bolkonskys, of Pierre, Natasha, and Andrei, are intimately connected with the national history that is played out in parallel with their lives. Balls and soirees alternate with councils of war and the machinations of statesmen and generals, scenes of violent battles with everyday human passions in a work whose extraordinary imaginative power has never been surpassed. ',
                Favorite: false
            },
            {
                Id: 2,
                ISBN: '8780743273565',
                Title: 'The Great Gatsby',
                Author: 'F. Scott Fitzgeral',
                Publisher: 'Charles Scribner\'s Sons',
                CoverImage: 'the_great_gatsby.gif',
                Summary: 'The novel chronicles an era that Fitzgerald himself dubbed the "Jazz Age". Following the shock and chaos of World War I, American society enjoyed unprecedented levels of prosperity during the "roaring" 1920s as the economy soared. At the same time, Prohibition, the ban on the sale and manufacture of alcohol as mandated by the Eighteenth Amendment, made millionaires out of bootleggers and led to an increase in organized crime, for example the Jewish mafia. Although Fitzgerald, like Nick Carraway in his novel, idolized the riches and glamor of the age, he was uncomfortable with the unrestrained materialism and the lack of morality that went with it, a kind of decadence. ',
                Favorite: false
            },
            {
                Id: 3,
                ISBN: '9780486280615',
                Title: 'The Adventures of Huckleberry Finn',
                Author: 'Mark Twain',
                Publisher: 'Chatto & Windus',
                CoverImage: 'the_adventures_of_huckleberry_finn.jpg',
                Summary: 'Revered by all of the town\'s children and dreaded by all of its mothers, Huckleberry Finn is indisputably the most appealing child-hero in American literature. Unlike the tall-tale, idyllic world of Tom Sawyer, The Adventures of Huckleberry Finn is firmly grounded in early reality. From the abusive drunkard who serves as Huckleberry\'s father, to Huck\'s first tentative grappling with issues of personal liberty and the unknown, Huckleberry Finn endeavors to delve quite a bit deeper into the complexities — both joyful and tragic of life. ',
                Favorite: false
            },
            {
                Id: 4,
                ISBN: '9780743477123',
                Title: 'Hamlet',
                Author: 'William Shakespeare',
                Publisher: 'Simon & Schuster',
                CoverImage: 'hamlet.jpg',
                Summary: 'The Tragedy of Hamlet, Prince of Denmark, or more simply Hamlet, is a tragedy by William Shakespeare, believed to have been written between 1599 and 1601. The play, set in Denmark, recounts how Prince Hamlet exacts revenge on his uncle Claudius, who has murdered Hamlet\'s father, the King, and then taken the throne and married Gertrude, Hamlet\'s mother. The play vividly charts the course of real and feigned madness—from overwhelming grief to seething rage—and explores themes of treachery, revenge, incest, and moral corruption. ',
                Favorite: false
            },
            {
                Id: 5,
                ISBN: '9781853260087',
                Title: 'Moby Dick',
                Author: 'Herman Melville',
                Publisher: 'Harper & Brothers',
                CoverImage: 'moby_dick.jpg',
                Summary: 'First published in 1851, Melville\'s masterpiece is, in Elizabeth Hardwick\'s words, "the greatest novel in American literature." The saga of Captain Ahab and his monomaniacal pursuit of the white whale remains a peerless adventure story but one full of mythic grandeur, poetic majesty, and symbolic power. Filtered through the consciousness of the novel\'s narrator, Ishmael, Moby-Dick draws us into a universe full of fascinating characters and stories, from the noble cannibal Queequeg to the natural history of whales, while reaching existential depths that excite debate and contemplation to this day. ',
                Favorite: false
            }
    ];

    function getAllBooks() {
        return books;
    }

    function getBook(bookId) {
        for (var i = 0; i < books.length; i++) {
            if (bookId == books[i].Id) {
                return books[i];
            }
        }

        return null;
    }

    function favoriteBook(book) {
        
    }

    return booksFactory;
});