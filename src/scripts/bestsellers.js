import { bookPopup } from "./bookPopup.js";
import { normalizeAuthorName } from "./all-books.js";  
import { getRandomPrice } from "./all-books.js";

//container --> holds ALL the books
//bookCard --> holds ONE book


// Bestsellers section //
fetch('https://gutendex.com/books?languages=en') // fetching data from the API
  .then(function(response) {
    return response.json();
  })
  .then(function(data) { // the data with the parsed response with a title, authors & formats etc

    const container = document.getElementById('bestsellers-container'); //selecting container where the books will be displayed, adds books dynamically.

    // from the API it takes and displays a number of books
    const books = data.results.slice(5, 15);

    books.forEach(function(book) { // loop through each book (array)
      const bookCard = document.createElement('div'); // creates an empty <div> for ONE book
      bookCard.classList.add("clickable-book");
      bookCard.bookData = book;  // ← store full book object
      bookCard.dataset.price = getRandomPrice(); // sets a random price for each book

      const img = document.createElement('img'); //creates an img element. 
      img.src = book.formats['image/jpeg']; // sets src to books jpeg cover
      img.alt = book.title; // sets text for book title

      const title = document.createElement('p'); // creates book title element, adds <p> 
      title.textContent = book.title;
      title.classList.add('book-title'); //class for styling

      const author = document.createElement('p'); // creates author <p> element
      // if no authors, fallback to "Unknown"
      author.textContent = book.authors.length > 0 ? normalizeAuthorName(book.authors[0].name) : "Unknown";
      author.classList.add('book-author'); 

      bookCard.appendChild(img); //adds image element to book-div
      bookCard.appendChild(title); //adds title element to book-div
      bookCard.appendChild(author); // adds author to book-div

      container.appendChild(bookCard); // adds each book block into the container on the page
    });
    bookPopup(); // initialize popups for newly added books
  });


//top genres section//

fetch('https://gutendex.com/books?languages=en') // fetching data from the API
  .then(function(response) {
    return response.json();
  })
  .then(function(data) { // the data with the parsed response with a title, authors & formats etc

    const container = document.getElementById('topgenres-container'); //selecting container where the books will be displayed, adds books dynamically.

    // from the API it takes and displays a number of books
    const books = data.results.slice(16, 24);

    books.forEach(function(book) { // loop through each book (array)
      const bookCard = document.createElement('div'); // creates an empty <div> for ONE book
      bookCard.bookData = book;
      bookCard.classList.add("clickable-book");
      bookCard.dataset.price = getRandomPrice(); // sets a random price for each book

      const img = document.createElement('img'); //creates an img element. 
      img.src = book.formats['image/jpeg']; // sets src to books jpeg cover
      img.alt = book.title; // sets text for book title

      const title = document.createElement('p'); // creates book title element, adds <p> 
      title.textContent = book.title;
      title.classList.add('book-title'); //class for styling

      const author = document.createElement('p'); // creates author <p> element
      // if no authors, shows "Unknown"
      author.textContent = book.authors.length > 0 ? normalizeAuthorName(book.authors[0].name) : "Unknown";
      author.classList.add('book-author'); 

      bookCard.appendChild(img); //adds image element to book-div
      bookCard.appendChild(title); //adds title element to book-div
      bookCard.appendChild(author); // adds author to book-div

      container.appendChild(bookCard); // adds each book block into the container on the page
    });
    bookPopup(); // initialize popups for newly added books
  });






