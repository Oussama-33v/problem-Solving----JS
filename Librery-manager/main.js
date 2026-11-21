import { books } from "./data.js";

// level 1;

function getBooksByCategory(books, category) {

    const booksFiltred = books.filter(book => {return book.category === category});
    
    booksFiltred.forEach(book => {console.log(book.title)})
}
// getBooksByCategory(books, "Programming")


function getReaderReviews(books, reader) {
    let readerReviews = [];
    books.forEach(book => {
        let reviews = book.reviews.filter(review => {
            return book.title, review.reader === reader
        });
        readerReviews.push(reviews)
    });
    return readerReviews;
}

// console.log(getHighlyRatedBooks(books));


function getHighlyRatedBooks(books) {
    let totalRates = 0;
    books.forEach(book => {
        book.reviews.forEach(review => {
            totalRates += review.rating
            console.log(totalRates);
        });
        let AVG = totalRates/review.length
            console.log(AVG);
    })
    // return HighlyRatedBooks
}
