import { books } from "./data.js";

// level 1;

function getBooksByCategory(books, category) {

    const booksFiltred = books.filter(book => { return book.category === category });

    booksFiltred.forEach(book => { console.log(book.title) })
}
// getBooksByCategory(books, "Personal Development")


function getReaderReviews(books, reader) {
    books.map(book => {
        const readerReviews = book.reviews.filter(review => { return review.reader === reader });
        readerReviews.forEach(reader => {
            console.log('Reader :', reader.reader, '-->', 'Review :', reader.rating, 'Book title :', book.title);
        });
    });
}

// getReaderReviews(books, "Amine");
function calculateBooksRatingAvg(rates) {
    let ratesSum = 0;
    rates.forEach(rate => {
        ratesSum += rate.rating;
    })
    let AVG = ratesSum / rates.length
    return AVG;
}

function getHighlyRatedBooks(books) {
    const HighlyRatedBooks = [];
    books.forEach(book => {
        let AVG = calculateBooksRatingAvg(book.reviews)
        if (AVG >= 4.5) {
            HighlyRatedBooks.push(book);
        }
    })
    return HighlyRatedBooks;
}


function getBestRatedBook(books) {
    let bestRate = 4.5;
    let bestRatedBook;
    const HighlyRatedBooks = getHighlyRatedBooks(books);
    HighlyRatedBooks.forEach(book => {
        let AVG = calculateBooksRatingAvg(book.reviews);
        if (AVG > bestRate) {
            bestRate = AVG
            bestRatedBook = book;
        }
    })
    return 'Best rated book is : ' + bestRatedBook.title

}
// console.log(getBestRatedBook(books))

function getMostActiveReader(books) {
    const reviewCounts = {}

    books.forEach(book => {
        book.reviews.forEach(review => {
            reviewCounts[review.reader] = (reviewCounts[review.reader] || 0) + 1;

        })
    })
    let mostActiveReader = null;
    let maxReviews = 0;

    for (const [reader, count] of Object.entries(reviewCounts)) {
        if (count > maxReviews) {
            maxReviews = count;
            mostActiveReader = reader;
        }
    }

    return mostActiveReader;
}
console.log(
 getMostActiveReader(books)
);
