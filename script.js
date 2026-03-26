const myLibrary = [];

function Book(color, name, author, pages, progress, notes) {
    this.id = crypto.randomUUID();
    this.color = color; // Color is string (hex, i.e. #000000)
    this.name = name;
    this.author = author;
    this.pages = pages; // Pages are 1+
    this.progress = progress; // Progress is 0-1
    this.notes = notes;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

