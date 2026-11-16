import { books } from "./data.js";

// level 1;

function getBooksByCategory(books, category) {

    let booksFiltred = books.filter(book => {return book.category === category});
    return booksFiltred
}

// console.log(getBooksByCategory(books, "Programming"));
 

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

console.log(getReaderReviews(books, 'Amine'));
 