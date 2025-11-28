// Top books:
// https://gutendex.com/books?sort=popular

//Genres: "subjects": ["Horror", "Science fiction", "Ghost stories"]
// https://gutendex.com/books?topic=genre&subject=Horror

// All books:
// https://gutendex.com/books


const allBooksContainer = document.querySelector('.books-grid');

const TOTAL_PAGES = 2400; // Gutendex total pages

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

        bookEl.innerHTML = `
          <img src="${imgSrc}" alt="${book.title}">
          <h3>${book.title}</h3>
          <p>${authors}</p>
        `;

        allBooksContainer.appendChild(bookEl);
      });
    })
    .catch(err => console.error(err));
}

// Call function to load books
loadRandomBooks();


