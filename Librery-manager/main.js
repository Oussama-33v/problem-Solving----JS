import { books } from "./data.js";

// level 1;

function getBooksByCategory(books, category) {

    const booksFiltred = books.filter(book => {return book.category === category});
    
    booksFiltred.forEach(book => {console.log(book.title)})
}
// getBooksByCategory(books, "Programming")


function getReaderReviews(books, reader) {
    books.map(book => {
        const readerReviews =  book.reviews.filter(review => {return review.reader === reader});
        readerReviews.forEach( reader =>{ console.log('Reader :',reader.reader ,'-->', 'Review :',reader.rating, 'Book title :', book.title );
    });
        
    });
}

getReaderReviews(books, "Amine");


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
