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


function getHighlyRatedBooks(books) {
    const HighlyRatedBooks = [];
    console.log('Highly Rated Books >>');
    
    books.forEach(book => {
        let ratesSum = 0;
        book.reviews.forEach(rate => {
            ratesSum += rate.rating;
        })
        let AVG = ratesSum / book.reviews.length
        if (AVG >= 4.5) {
            HighlyRatedBooks.push(book);
            console.log('Book Name :',book.title);
        }
    })
}
console.log(getHighlyRatedBooks(books))