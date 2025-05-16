const myLibrary = [];
const table = document.querySelector(".list");
const addBtn = document.querySelector(".add");
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}
Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${
    this.read ? "already read" : "not read yet"
  }.`;
};
function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}
function displayBooks() {
  myLibrary.forEach((v, i) => {
    const aBook = document.createElement("tr");
    const nCell = document.createElement("td");
    const titleCell = document.createElement("tr");
    const authorCell = document.createElement("tr");
    const pagesCell = document.createElement("tr");
    const readCell = document.createElement("tr");
    aBook.append(nCell, titleCell, authorCell, pagesCell, readCell);
    nCell.textContent = i + 1;

    titleCell.textContent = v.title;
    authorCell.textContent = v.title;
    pagesCell.textContent = v.title;
    readCell.textContent = v.title;
    titleCell.textContent = v.title;
  });
}
