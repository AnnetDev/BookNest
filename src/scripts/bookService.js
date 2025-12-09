// not used now - todo: remove later if not needed
export function getBooks() {
    const TOTAL_PAGES = 2400;

    const randomPage = Math.floor(Math.random() * TOTAL_PAGES) + 1;

    return fetch(`https://gutendex.com/books?page=${randomPage}`)
        .then(res => res.json())
        .then(data => {
            const books = data.results
            return books;
        });
}

