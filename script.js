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
  },
  {
    title: 'Silmarillion',
    author: 'Tolkien',
    pages: 667,
    read: false,
    id: 2
  }
];

const container = document.querySelector('.container');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBook(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  console.log(newBook);
  
  books.push(newBook);
}

function displayBook(book) {
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

  const cardDelete = document.createElement('button');
  cardDelete.textContent = "Delete";
  cardDelete.classList.add('btn-delete');

  card.appendChild(cardTitle);
  card.appendChild(cardAuthor);
  card.appendChild(cardPages);
  card.appendChild(cardRead);
  card.appendChild(cardDelete);

  container.appendChild(card);
}

function displayLibrary() {
  container.innerHTML = '';
  books.forEach(book => displayBook(book));
}

displayLibrary();

const dialog = document.querySelector('dialog');
const dialogOpen = document.querySelector('.dialog-open');
const form = document.querySelector('form');

dialogOpen.addEventListener('click', () => {
  dialog.showModal();
})

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('#read').value;

  addBook(title, author, pages, read);
  displayLibrary();
  dialog.close();
})

