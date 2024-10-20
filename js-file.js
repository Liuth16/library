const addButton = document.querySelector(".add");
const closeButton = document.querySelector(".close");
const dialog = document.querySelector("dialog");
const submit = document.querySelector(".register");
const mainContainer = document.querySelector(".main");
const form = document.querySelector("#book-form");

const myLibrary = [];

class Book {
  constructor(author, title, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.dataIndex = myLibrary.length;
    this.read = false;
  }
}

function addBookToLibrary(author, title, pages) {
  const book = new Book(author, title, pages);
  const index = book.dataIndex;
  const keyName = `book${index}`;
  const bookEntry = {};
  bookEntry[keyName] = book;
  myLibrary.push(bookEntry);
}

function createElements() {
  const div = document.createElement("div");
  const idName = String(myLibrary.length - 1);
  const objKey = `book${idName}`;
  const lastBook = myLibrary[myLibrary.length - 1][objKey];
  div.setAttribute("id", objKey);
  div.setAttribute("class", "book-card");
  div.innerHTML = `            <div>
                <p><strong>Author:</strong> ${lastBook.author}</p>
                <p><strong>Title:</strong> ${lastBook.title}</p>
                <p><strong>Pages:</strong> ${lastBook.pages}</p>
            </div>
            <div class="card-buttons">
                <button class="remove-button">Remove</button>
                <label>Read<input type="checkbox" class="read-check"></label>
            </div>`;
  mainContainer.appendChild(div);

  const removeButton = div.querySelector(".remove-button");
  removeButton.addEventListener("click", () => {
    myLibrary.splice(parseInt(idName), 1);
    mainContainer.removeChild(div);
  });

  const readToggle = div.querySelector(".read-check");
  readToggle.addEventListener("change", () => {
    lastBook.read = readToggle.checked;
  });
}

addButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  const authorInput = document.getElementById("author");
  const titleInput = document.getElementById("title");
  const pagesInput = document.getElementById("pages");

  authorInput.value = "";
  titleInput.value = "";
  pagesInput.value = "";

  dialog.close();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const authorInput = document.getElementById("author");
  const titleInput = document.getElementById("title");
  const pagesInput = document.getElementById("pages");

  const author = authorInput.value;
  const title = titleInput.value;
  const page = pagesInput.value;

  addBookToLibrary(author, title, page);
  createElements();

  authorInput.value = "";
  titleInput.value = "";
  pagesInput.value = "";

  dialog.close();
});
