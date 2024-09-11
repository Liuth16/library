const addButton = document.querySelector(".add");
const closeButton = document.querySelector(".close");
const dialog = document.querySelector("dialog");
const submit = document.querySelector(".register");
const mainContainer = document.querySelector(".main");
const form = document.querySelector("#book-form");

const myLibrary = [];

function Book(author, title, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.dataIndex = myLibrary.length;

};

function addBookToLibrary() {

};

addButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
})

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const author = document.getElementById("author").value;
    const title = document.getElementById("title").value;
    const page = document.getElementById("pages").value;

});


