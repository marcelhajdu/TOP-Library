let myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, have I read it : ${this.isRead}`;
  };
}

function addBookToLibrary(title, author, pages, isRead) {
  let book = new Book(title, author, pages, isRead);
  myLibrary.push(book);
}

function displayAllBooks() {
  myLibrary.forEach((book) => {
    console.log(book);
  });
}

function removeBook(index) {
  if (index > -1) {
    array.splice(index, 1);
  }
}

function changeReadStatus(name) {
  myLibrary.forEach((book) => {
    if (book.title === name) {
      book.isRead = !book.isRead;
    }
  });
}
