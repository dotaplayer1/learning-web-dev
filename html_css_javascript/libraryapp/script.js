const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pageCount = document.querySelector('#pagecount');
const isRead = document.querySelector('#hasread');
const submitButton = document.querySelector('input[type="submit"]');
const displaySection = document.querySelector('#displaysection');
const errorAlertSlot = document.querySelector('#errorAlertSlot');

let myLibrary = [];

function Book(title, author, pageCount, isRead) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.isRead = isRead;
}

Book.prototype.cardFactory = function() {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardTitle = document.createElement('p');
    cardTitle.textContent = `Title = ${this.title}`;
    card.appendChild(cardTitle);

    const cardAuthor = document.createElement('p');
    cardAuthor.textContent = `Author = ${this.author}`;
    card.appendChild(cardAuthor);

    const cardPageCount = document.createElement('p');
    cardPageCount.textContent = `PageCount = ${this.pageCount}`;
    card.appendChild(cardPageCount);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('deletebutton');
    deleteButton.textContent = "Delete Item";
    card.appendChild(deleteButton);
    deleteButton.onclick = () => card.remove();
    
    const hasReadButton = document.createElement('button');
    if (this.isRead === true) {
        hasReadButton.classList.add('is_read');
        hasReadButton.textContent = 'Read';
    } else {
        hasReadButton.classList.add('is_not_read');
        hasReadButton.textContent = 'Not Read';
    }
    card.appendChild(hasReadButton);
    hasReadButton.onclick = () => {
        if (hasReadButton.classList.contains('is_read')) {
            hasReadButton.classList.remove('is_read');
            hasReadButton.classList.add('is_not_read');
            hasReadButton.textContent = 'Not Read';
        } else {
            hasReadButton.classList.add('is_read');
            hasReadButton.classList.remove('is_not_read');
            hasReadButton.textContent = 'Read';
        }
    };
    
    displaySection.appendChild(card);
}

function displayLibrary(bookToDisplay) {
    bookToDisplay.cardFactory();
}

function addBookToLibrary() {
    const bookTitle = title.value;
    const bookAuthor = author.value;
    const bookPageCount = pageCount.value;
    const bookIsRead = isRead.checked;
    title.value = '';
    author.value = '';
    pageCount.value = '';
    let newBook = new Book(bookTitle, bookAuthor, bookPageCount, bookIsRead);
    console.log(newBook);
    myLibrary.push(newBook); 

    displayLibrary(newBook);
}

submitButton.addEventListener("click", submitButtonClicked);

function formFieldsNotEmpty() {
    if (title.value != '' && author.value != '' && pageCount.value != '') {
        return 1;
    } else {
        return 0;
    }
}

function submitButtonClicked(event) {
    if (formFieldsNotEmpty() === 1) {
        addBookToLibrary();
        errorAlertSlot.textContent = '';
    } else {
        if (errorAlertSlot.textContent === '') {
            const errorAlert = document.createElement('p');
            errorAlert.textContent = 'No empty fields allowed!'
            errorAlertSlot.appendChild(errorAlert);
        }
    }
    event.preventDefault();
}