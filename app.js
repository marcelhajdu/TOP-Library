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

function removeBook(index) {
  if (index > -1) {
    myLibrary.splice(index, 1);
  }
}

function changeReadStatus(id) {
  myLibrary[id].isRead = !myLibrary[id].isRead;
}

function renderBooks() {
  list.innerHTML = "";
  for (i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(book.title));
    li.appendChild(document.createTextNode(" "));
    li.appendChild(document.createTextNode(book.author));
    li.appendChild(document.createTextNode(" "));
    li.appendChild(document.createTextNode(book.pages));
    li.appendChild(document.createTextNode(" "));
    li.appendChild(document.createTextNode(book.isRead));
    li.setAttribute("data-id", i);
    let delBtn = document.createElement("BUTTON");
    delBtn.innerText = "Delete book";
    delBtn.addEventListener("click", (e) => {
      let id = e.explicitOriginalTarget.parentElement.dataset.id;
      removeBook(id);
      renderBooks();
    });
    let statBtn = document.createElement("BUTTON");
    statBtn.innerText = "Change status";
    statBtn.addEventListener("click", (e) => {
      let id = e.explicitOriginalTarget.parentElement.dataset.id;
      changeReadStatus(id);
      renderBooks();
    });
    li.appendChild(delBtn);
    li.appendChild(statBtn);
    list.appendChild(li);
  }
}

addBookToLibrary("Lord of the Rings", "Tolkien", 455, false);
addBookToLibrary("The Hobbit", "Tolkien", 123, true);

renderBooks();
