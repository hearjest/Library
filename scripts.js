const submitButton=document.getElementById('submitButton');
submitButton.addEventListener('click',function(){
    let title=document.getElementById('BookTitle').value;
    let author=document.getElementById('Author').value;
    let pages=document.getElementById('Pages').value;
    let readStatus=document.getElementById('ReadOrNot').value;
    addBookToLibrary(title,author,pages,readStatus);
});
//const displayButton=document.getElementById('displayBooks');
//displayButton.addEventListener('click',displayBooks());
let myLibrary=[];

function Book(title, author, pages,read){
    this.title=title;
    this.author=author;
    this.page=pages;
    isRead=read; 
}

Book.prototype.info=function(){
    let status;
    if(isRead){
        status='finished reading'
    }else{
        status='not read'
    }
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`;
};

function addBookToLibrary(title,author,pages,readStatus){
    myLibrary.push(new Book(title,author,pages,readStatus));
    displayBooks();
};

function displayBooks(){
    let div=document.createElement('div');
    div.classList.add('bookCard');
    let titleBox=document.createElement('div');
    let authorBox=document.createElement('div');
    let pagesBox=document.createElement('div');
    let readBox=document.createElement('div');
    titleBox.textContent=myLibrary[myLibrary.length-1].title;
    authorBox.textContent=myLibrary[myLibrary.length-1].author;
    pagesBox.textContent=myLibrary[myLibrary.length-1].page;
    if(isRead){
        readBox.textContent='finished reading'
    }else{
        readBox.textContent='not read'
    }
    document.querySelector('#libraryContainer').appendChild(div);
    let thing=document.querySelectorAll('.bookCard')[document.querySelectorAll('.bookCard').length-1];
    thing.appendChild(titleBox);
    thing.appendChild(authorBox);
    thing.appendChild(pagesBox);
    thing.appendChild(readBox);
}