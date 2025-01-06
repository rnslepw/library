let books = [
  {
    title: 'Hobbit',
    author: 'Tolkien',
    pages: 256,
    read: true
  },
  {
    title: 'Lord of The Rings',
    author: 'Tolkien',
    pages: 949,
    read: false
  },
  {
    title: 'Silmarillion',
    author: 'Tolkien',
    pages: 667,
    read: false
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

function removeBook() {

}

function displayBook(book) {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardTitle = document.createElement('h2');
  cardTitle.textContent = book.title;

  const cardAuthor = document.createElement('h3');
  cardAuthor.textContent = book.author;

  const cardPages = document.createElement('p');
  cardPages.textContent = `Pages: ${book.pages}`;

  const cardRead = document.createElement('button');
  cardRead.textContent = book.read ? "Read" : "Todo";
  cardRead.classList.add('btn-read');

  const cardDelete = document.createElement('button');
  cardDelete.textContent = "Delete";
  cardDelete.classList.add('btn-delete');

  card.appendChild(cardTitle);
  card.appendChild(cardAuthor);
  card.appendChild(cardPages);
  card.appendChild(cardRead);
  card.appendChild(cardDelete);

  container.appendChild(card);

  cardRead.addEventListener('click', (e) => {
    const parentCard = e.target.parentNode;
    const bookIndex = books.findIndex(book => book.title === parentCard.firstChild.textContent );
    books[bookIndex].read = !books[bookIndex].read;
    console.log(books);
    
    
    
    displayLibrary();
  })

  cardDelete.addEventListener('click', (e) => {
    const parentCard = e.target.parentNode;
    books = books.filter(book => book.title === parentCard.firstChild.textContent ? null : book);
    displayLibrary();
  })
}

function displayLibrary() {
  container.innerHTML = '';
  books.forEach(book => displayBook(book));
}

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

displayLibrary();

