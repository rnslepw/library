const books = [
  {
    title: 'Hobbit',
    author: 'Tolkien',
    pages: 256,
    read: true,
    id: 0
  },
  {
    title: 'Lord of The Rings',
    author: 'Tolkien',
    pages: 949,
    read: false,
    id: 1
  }
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBook() {
  const title = prompt("Enter book title: ");
  const author = prompt("Enter book author: ");
  const pages = prompt("Enter number of pages: ");
  const read = prompt("Have you read (y/n)? ");

  const newBook = new Book(title, author, pages, read);
  books.push(newBook);
}

function displayBook(book) {
  const container = document.querySelector('.container');
  const card = document.createElement('div');
  card.classList.add('card');

  const cardTitle = document.createElement('h2');
  cardTitle.textContent = book.title;

  const cardAuthor = document.createElement('h3');
  cardAuthor.textContent = book.author;

  const cardPages = document.createElement('p');
  cardPages.textContent = book.pages;

  const cardRead = document.createElement('button');
  cardRead.textContent = book.read ? "Read" : "Not Read";

  card.appendChild(cardTitle);
  card.appendChild(cardAuthor);
  card.appendChild(cardPages);
  card.appendChild(cardRead);

  container.appendChild(card);
}

function displayLibrary() {
  books.map(book => displayBook(book));
}

displayLibrary();
