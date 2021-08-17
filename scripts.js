const submitButton=document.getElementById('submit');
submitButton.addEventListener('click',function(){
    let title=document.getElementById('Title').textContent;
    let author=document.getElementById('Author').textContent;
    let pages=document.getElementById('Pages').textContent;
    let readStatus=document.getElementById('ReadOrNot').value;
    addBookToLibrary(title,author,pages,readStatus);
});
const displayButton=document.getElementById('displayBooks');
displayButton.addEventListener('click',displayBooks());
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
};

function displayBooks(){
    let div;
    let title;
    let author;
    let pages;
    
    for(let i=0;i<myLibrary.length;i++){
    }
}