// Top books:
// https://gutendex.com/books?sort=popular

//Genres: "subjects": ["Horror", "Science fiction", "Ghost stories"]
// https://gutendex.com/books?topic=genre&subject=Horror

// All books:
// https://gutendex.com/books
import { bookPopup } from "./bookPopup";

const allBooksContainer = document.querySelector('.books-grid');

const TOTAL_PAGES = 2400; // Gutendex total pages

/// Function to get the shortest title (only before ';' or ':')
function getShortestTitle(book) {
  let title = book.title || 'No title';
  const sepIndex = title.search(/[:;]/);
  if (sepIndex > 0) title = title.slice(0, sepIndex);
  return title;
}

// Function to load 6 random books
function loadRandomBooks() {
  // Pick a random page
  const randomPage = Math.floor(Math.random() * TOTAL_PAGES) + 1;

  fetch(`https://gutendex.com/books?page=${randomPage}`)
    .then(res => res.json())
    .then(data => {
      const books = data.results;

      // Select 6 random books from this page
      const randomBooks = books.sort(() => 0.5 - Math.random()).slice(0, 6);

      randomBooks.forEach(book => {
        const bookEl = document.createElement('div');
        bookEl.classList.add('book');
        bookEl.classList.add('clickable-book');

        const authors = book.authors.map(a => a.name).join(', ');
        const imgSrc = book.formats['image/jpeg'] || '';
        const shortTitle = getShortestTitle(book);

        bookEl.innerHTML = `
          <img src="${imgSrc}" alt="${book.title}">
          <h3>${shortTitle}</h3>
          <p>${authors}</p>
        `;

        allBooksContainer.appendChild(bookEl);
      });
      bookPopup();
    })
    .catch(err => console.error(err));
}

// Call function to load books
loadRandomBooks();

const loadMoreBtn = document.querySelector('.load-more');
loadMoreBtn.addEventListener('click', () => {
  loadRandomBooks();
});

const filterBtn = document.querySelector('.books-filter');
filterBtn.addEventListener('click', () => {
  const booksArray = Array.from(allBooksContainer.children);
  booksArray.sort((a, b) => {
    const titleA = a.querySelector('p').textContent.toLowerCase();
    const titleB = b.querySelector('p').textContent.toLowerCase();
    return titleA.localeCompare(titleB);
  });
  allBooksContainer.innerHTML = '';
  booksArray.forEach(book => allBooksContainer.appendChild(book));
});





