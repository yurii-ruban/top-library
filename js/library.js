const myLibrary = [];
const readSrc = "./img/read.svg";
const notReadSrc = "./img/not_read.svg";

function Entity() {
  this.id = self.crypto.randomUUID();
};

Entity.prototype.getId = function() {
    return this.id;
}

function Book(title, author, pages, read) {
    this.id = self.crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Object.setPrototypeOf(Book.prototype, Entity.prototype);

function createCard () {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card");

  const infoContainer = document.createElement("div");
  infoContainer.classList.add("info");
  const cardHeader = document.createElement("h3");
  cardHeader.classList.add("title");
  const cardAuthor = document.createElement("p");
  cardAuthor.classList.add("author");
  const cardPages = document.createElement("p");
  cardPages.classList.add("pages");
  const cardId = document.createElement("p");
  cardId.classList.add("id");
  infoContainer.appendChild(cardHeader);
  infoContainer.appendChild(cardAuthor);
  infoContainer.appendChild(cardPages);
  infoContainer.appendChild(cardId);

  const controlsContainer = document.createElement("div");
  controlsContainer.classList.add("controls");
  const readBtn = document.createElement("button");
  readBtn.classList.add("haveread");
  const readImg = document.createElement("img");
  readImg.width = "24";
  readImg.height = "24";
  readBtn.appendChild(readImg);
  const removeBtn = document.createElement("button");
  removeBtn.classList.add("remove-book");
  controlsContainer.appendChild(readBtn);
  controlsContainer.appendChild(removeBtn);

  cardContainer.appendChild(infoContainer);
  cardContainer.appendChild(controlsContainer);

  return {
    cardHeader,
    cardAuthor,
    cardPages,
    cardId,
    readBtn,
    readImg,
    removeBtn,
    cardContainer
  };

}

function fillCardInfo(cardObj) {
  const lastBook = myLibrary[myLibrary.length - 1];
  cardObj.cardHeader.textContent = lastBook.title;
  cardObj.cardAuthor.textContent = "Author: " + lastBook.author;
  cardObj.cardPages.textContent = "Pages: " + lastBook.pages;
  cardObj.cardId.textContent = "Id: " + lastBook.getId();
  cardObj.readImg.src = lastBook.read ? readSrc : notReadSrc;
  cardObj.removeBtn.textContent = "Remove this book";
}


const libraryContainer = document.querySelector(".cards-container");
const addBtn = document.querySelector(".submit");
addBtn.addEventListener('click', addBookToLibrary, false);


function addBookToLibrary(clickEv) {
  clickEv.preventDefault()
  const bookName = document.querySelector('#title').value;
  const bookAuthor = document.querySelector('#author').value;
  const bookPages = document.querySelector('#pages').value;
  const bookRead = Boolean(document.querySelector('#read').checked);

  myLibrary.push(new Book(bookName, bookAuthor, bookPages, bookRead));

  const cardMockup = createCard();
  fillCardInfo(cardMockup);

  libraryContainer.appendChild(cardMockup.cardContainer);
}

function removeBookFromLibrary(id) {

}

const resizeBtn = document.querySelector(".sidebar-expander");
resizeBtn.addEventListener("click", function (e) {
  document.body.classList.toggle("sb-expanded");
});