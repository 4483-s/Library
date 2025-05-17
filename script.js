const myLibrary = [];
const table = document.querySelector(".list");
const addBtn = document.querySelector(".add");
addBtn.addEventListener("click", function () {
  addBookToLibrary(
    document.querySelector("#title").value,
    document.querySelector("#author").value,
    document.querySelector("#pages").value,
    document.querySelector("#read").value
  );
  console.log(myLibrary);
  displayBooks();
});
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
function displayNumbers() {
  const number = document.querySelectorAll(".number");
  number.forEach((v, i) => {
    v.textContent = i + 1;
  });
}
function displayBooks() {
  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }
  myLibrary.forEach((v, i) => {
    const aBook = document.createElement("tr");
    const nCell = document.createElement("td");
    const titleCell = document.createElement("td");
    const authorCell = document.createElement("td");
    const pagesCell = document.createElement("td");
    const readCell = document.createElement("td");
    const idCell = document.createElement("td");
    const rmBtnCell = document.createElement("td");

    const rmBtn = document.createElement("button");
    idCell.classList.add("id");
    nCell.classList.add("number");
    titleCell.textContent = v.title;
    authorCell.textContent = v.author;
    pagesCell.textContent = v.pages;
    readCell.textContent = v.read;
    idCell.textContent = v.id;
    rmBtn.textContent = "Remove";
    rmBtn.addEventListener("click", function () {
      myLibrary.splice(
        myLibrary.findIndex((v) => (v.id = idCell.textContent)),
        1
      );
      aBook.remove();

      displayNumbers();
    });

    rmBtnCell.append(rmBtn);
    aBook.append(
      nCell,
      titleCell,
      authorCell,
      pagesCell,
      readCell,
      idCell,
      rmBtnCell
    );

    table.append(aBook);
  });
  displayNumbers();
}
