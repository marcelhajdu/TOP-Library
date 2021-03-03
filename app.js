let myLibrary = [];
const list = document.getElementById("list");
const addNewBook = document.getElementById("addNewBookBtn");

addNewBook.addEventListener("click", () => {
  const form = document.querySelector("#form");
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let isRead = false;
  addBookToLibrary(title, author, pages, isRead);
  renderBooks();
  clearFields();
});

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

function clearFields() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
}
/*
function displayAllBooks() {
  myLibrary.forEach((book) => {
    console.log(book);
  });
}
*/

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

function renderBooks() {
  list.innerHTML = "";
  myLibrary.forEach((book) => {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(book.title));
    li.appendChild(document.createTextNode(" "));
    li.appendChild(document.createTextNode(book.author));
    li.appendChild(document.createTextNode(" "));
    li.appendChild(document.createTextNode(book.pages));
    li.appendChild(document.createTextNode(" "));
    li.appendChild(document.createTextNode(book.isRead));
    list.appendChild(li);
  });
}

addBookToLibrary("Lord of the Rings", "Tolkien", 455, false);
addBookToLibrary("The Hobbit", "Tolkien", 123, true);
