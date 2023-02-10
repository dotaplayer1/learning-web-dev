const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pageCount = document.querySelector('#pagecount');
const isRead = document.querySelector('#hasread');
const submitButton = document.querySelector('input[type="button"]');

let myLibrary = [];

function Book(title, author, pageCount, isRead) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.isRead = isRead;
}

function displayLibrary() {
    for (let i = 0; )
}

function addBookToLibrary() {
    const bookTitle = title.value;
    const bookAuthor = author.value;
    const bookPageCount = pageCount.value;
    const bookIsRead = isRead.checked;

    let newBook = new Book(bookTitle, bookAuthor, bookPageCount, bookIsRead);
    console.log(newBook);
    myLibrary.push(newBook); 

    displayLibrary();
}

submitButton.addEventListener("click", addBookToLibrary);