// Top books:
// https://gutendex.com/books?sort=popular

//Genres: "subjects": ["Horror", "Science fiction", "Ghost stories"]
// https://gutendex.com/books?topic=genre&subject=Horror

// All books:
// https://gutendex.com/books


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
    const titleA = a.querySelector('h3').textContent.toLowerCase();
    const titleB = b.querySelector('h3').textContent.toLowerCase();
    return titleA.localeCompare(titleB);
  });
  allBooksContainer.innerHTML = '';
  booksArray.forEach(book => allBooksContainer.appendChild(book));
});


// // All books from Google Books API

// const container = document.querySelector('.books-grid');
// const API_KEY = 'AIzaSyA5-7fM1w5g3HZ4uUsC1jARh8fYKe_wZ5k';

// async function showSixRandomGenreBooks() {
//   // List of possible genres
//   const genres = ['fantasy', 'romance', 'science', 'mystery', 'history', 'art', 'biography', 'travel'];

//   // Shuffle genres and take the first 6
//   const selectedGenres = genres.sort(() => 0.5 - Math.random()).slice(0, 6);

//   container.innerHTML = '';

//   // Loop through each selected genre
//   for (const genre of selectedGenres) {
//     try {
//       // Fetch books for the current genre
//       const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&maxResults=40&key=${API_KEY}`);
//       const data = await res.json();
//       const books = data.items || [];
//       if (!books.length) continue;

//       // Pick a random book from the genre
//       const book = books[Math.floor(Math.random() * books.length)];
//       const info = book.volumeInfo;

//       // Render book info
//       container.innerHTML += `
//         <div class="book">
//           <img src="${info.imageLinks?.thumbnail || ''}" alt="${info.title}">
//           <h3>${info.title || 'No title'}</h3>
//           <p>${info.authors ? info.authors.join(', ') : 'Unknown author'}</p>
//         </div>
//       `;
//     } catch (err) {
//       console.error(err);
//     }
//   }
// }

// // Run the function
// showSixRandomGenreBooks();



