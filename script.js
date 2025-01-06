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

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

class Display {
  container = document.querySelector('.container');

  constructor(books) {
    this.books = books;
  }

  displayLibrary() {
    this.container.innerHTML = '';
    this.books.forEach(book => this.displayBook(book));
  }

  displayBook(book) {
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
  
    this.container.appendChild(card);
  
    cardRead.addEventListener('click', (e) => {
      const parentCard = e.target.parentNode;
      const bookIndex = this.books.findIndex(book => book.title === parentCard.firstChild.textContent );
      this.books[bookIndex].read = !this.books[bookIndex].read;
      this.displayLibrary();
    })
  
    cardDelete.addEventListener('click', (e) => {
      const parentCard = e.target.parentNode;
      this.books = this.books.filter(book => book.title === parentCard.firstChild.textContent ? null : book);
      
      this.displayLibrary();
    })
  }

  addBook(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    this.books.push(newBook);
  }

  displayForm() {
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

      this.addBook(title, author, pages,read);
      this.displayLibrary();
      dialog.close();
    })
  }
}

const display = new Display(books);
display.displayLibrary();
display.displayForm();

