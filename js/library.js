const myLibrary = [];

function Entity() {
    this.id = self.crypto.randomUUID();
};

Entity.prototype.getId = function() {
    return this.id;
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Object.setPrototypeOf(Book.prototype, Entity.prototype);

function addBookToLibrary() {
  // take params, create a book then store it in the array
}

function removeBookFromLibrary(id) {

}