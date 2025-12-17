import { bookPopup } from "./bookPopup.js";
import { normalizeAuthorName } from "./all-books.js";
import { getRandomPrice } from "./all-books.js";

//container --> holds ALL the books
//bookCard --> holds ONE book


const cacheKey = "gutendexData"; // defines key when storing/retrieving data in localstorage
const cached = localStorage.getItem(cacheKey); //checks if there's cached data stored in browser's local storage

// if the data is cached, render/display it immediately
if (cached) {
  const data = JSON.parse(cached);
  render(data);
} else {

  // if there's no cached data, it fetches from API and renders it
  fetch("https://gutendex.com/books?languages=en")
    .then(res => res.json())
    .then(data => {
      localStorage.setItem(cacheKey, JSON.stringify(data)); //saves it to the localstorage for next time
      render(data); //render books on the page
    });
}

//render function --> defines function that takes data from API and creates html elements to display books
function render(data) {

  // bestsellers
  const bestsellersContainer = document.getElementById("bestsellers-container");
  if (bestsellersContainer) {
    data.results.slice(5, 15).forEach(book => {
      const card = document.createElement("div");
      card.classList.add("clickable-book");
      card.classList.add("clickable-book-bestsellers");
      card.bookData = book;
      card.dataset.price = getRandomPrice();

      const img = document.createElement("img");
      img.src = book.formats["image/jpeg"];
      img.alt = book.title;

      const title = document.createElement("p");
      title.classList.add("book-title");
      title.textContent = book.title;

      const author = document.createElement("p");
      author.classList.add("book-author");
      author.textContent =
        book.authors.length
          ? normalizeAuthorName(book.authors[0].name)
          : "Unknown";

      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(author);
      bestsellersContainer.appendChild(card);
    });
  }

  // top genres section
  const topgenresContainer = document.getElementById("topgenres-container");
  if (topgenresContainer) { //if the container exists on the page
    data.results.slice(16, 24).forEach(book => { //take books from array
      const card = document.createElement("div"); //creates a div element for each book
      card.classList.add("clickable-book"); //css class for styling
      card.classList.add("clickable-book-topgenres"); 
      card.bookData = book; //attaches book data directly to element for later use
      card.dataset.price = getRandomPrice(); //adds random price

      //creates <img> element, uses the API books jpeg image
      const img = document.createElement("img");
      img.src = book.formats["image/jpeg"];
      img.alt = book.title;

      //creates <p> element for title and css for styling (class)
      const title = document.createElement("p");
      title.classList.add("book-title");
      title.textContent = book.title;

      //creates <p> element for author
      const author = document.createElement("p");
      author.classList.add("book-author");
      author.textContent =
        book.authors.length
          ? normalizeAuthorName(book.authors[0].name) //if no author, displays unknown
          : "Unknown";

          //adds to the bookCard and each book block the container
      card.appendChild(img); 
      card.appendChild(title);
      card.appendChild(author);
      topgenresContainer.appendChild(card);
    });
  }

  bookPopup(); //calls function to add popup to all books when you click
}
