import { bookPopup } from "./bookPopup";

const allBooksContainer = document.querySelector('.books-grid');
const loader = document.querySelector('.all-books-loader');

const TOTAL_PAGES = 2400; // Gutendex total pages

export function getRandomPrice() {
    const min = 120;
    const max = 320;

    const raw = Math.random() * (max - min) + min;
    return Math.round(raw / 10) * 10; // round to nearest 10
}

function getShortestTitle(book) { 
  let title = book.title || 'No title'; 
  const words = title.split(' '); 
  if (words.length <= 5) return title; 
  return words.slice(0, 5).join(' ') + '..'; 
}

export function normalizeAuthorName(name) {
  if (!name.includes(',')) return name; 
  const [last, first] = name.split(',').map(s => s.trim());
  return `${first} ${last}`; 
}

// Function to load 6 random books
function loadRandomBooks() {
  // Pick a random page
  const randomPage = Math.floor(Math.random() * TOTAL_PAGES) + 1;

  fetch(`https://gutendex.com/books?page=${randomPage}`)
    .then(res => res.json())
    .then(data => {
      const books = data.results;

      // Select 9 random books from this page
      const randomBooks = books.sort(() => 0.5 - Math.random()).slice(0, 9);

      randomBooks.forEach(book => {
        const bookEl = document.createElement('div');
        bookEl.classList.add('book');
        bookEl.classList.add('clickable-book');
        bookEl.bookData = book; // adding book data to the element for popup use
        bookEl.dataset.price = getRandomPrice();

        const authors = book.authors.map(a => normalizeAuthorName(a.name)).join(', ');
        const imgSrc = book.formats['image/webp'] ||
          book.formats['image/jpeg'] ||
          book.formats['image/png'] ||'';
        const shortTitle = getShortestTitle(book);

        bookEl.innerHTML = `
          <img src="${imgSrc}" alt="${book.title}" loading="lazy" >
          <h3>${shortTitle}</h3>
          <p>${authors}</p>
        `;

        allBooksContainer.appendChild(bookEl);
      });
      loader.style.display = 'none'; // hide loader after books are loaded
      bookPopup();
    })
    .catch(err => console.error(err));
}

// Call function to load books
loadRandomBooks();

const loadMoreBtn = document.querySelector('.load-more');
if (loadMoreBtn) {
  loadMoreBtn.addEventListener('click', () => {
    loadRandomBooks();
  });
}

const filterBtn = document.querySelector('.books-filter');

let isAZ = true;

if (filterBtn) {
  filterBtn.addEventListener('click', () => {
  const booksArray = Array.from(allBooksContainer.children);
  booksArray.sort((a, b) => {
    const titleA = a.querySelector('p').textContent.toLowerCase();
    const titleB = b.querySelector('p').textContent.toLowerCase();
    if (!isAZ) {
      return titleB.localeCompare(titleA);
    }
    return titleA.localeCompare(titleB);
  });
  allBooksContainer.innerHTML = '';
  booksArray.forEach(book => allBooksContainer.appendChild(book));
  filterBtn.childNodes[0].textContent = isAZ ? "Filter Z-A" : "Filter A-Z";
  isAZ = !isAZ;
});
} 






