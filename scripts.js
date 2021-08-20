let index=0;
const submitButton=document.getElementById('submitButton');
submitButton.addEventListener('click',function(){
    let title=document.getElementById('BookTitle').value;
    let author=document.getElementById('Author').value;
    let pages=document.getElementById('Pages').value;
    let readStatus;
    if(document.getElementById('ReadOrNot').value==='true'){
        readStatus=true;
    }else{
        readStatus=false;
    };
    addBookToLibrary(title,author,pages,readStatus);
});
let myLibrary=[];

function Book(title, author, pages,read){
    this.title=title;
    this.author=author;
    this.page=pages;
    this.isRead=read; 
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
    let readBox=document.createElement('button');
    let deleteButtonContainer=document.createElement('div');
    let deleteButton=document.createElement('button');
    let deleteIcon=document.createElement('span');
    deleteIcon.classList.add('material-icons-outlined');
    deleteIcon.textContent='delete';//Create html elements
    deleteButton.setAttribute('type','submit');
    //deleteButton.textContent='Remove';
    deleteButton.classList.add('deleteButton');
    deleteButton.addEventListener('click',function(){
        myLibrary.splice(Number(deleteButton.parentElement.id),1)
        let list=document.getElementsByClassName('bookCard');
        deleteButton.parentElement.parentElement.remove();  
        for(let i=0;i<list.length;i++){
            list[i].setAttribute('id',`${i}`);
        }
    });
    readBox.setAttribute('type','submit');
    readBox.addEventListener('click',function(){
        let book=myLibrary[Number(readBox.parentElement.id)];
        if(book.isRead){
            readBox.textContent='Not finished';
        }else{
            readBox.textContent='Finished reading';
        }
        book.isRead=!book.isRead;
    });                                         //Add event listeners to buttons
    titleBox.textContent=myLibrary[myLibrary.length-1].title;
    authorBox.textContent=myLibrary[myLibrary.length-1].author;
    pagesBox.textContent='Pages: '+myLibrary[myLibrary.length-1].page;
    if(myLibrary[myLibrary.length-1].isRead){
        readBox.textContent='Finished reading';
    }else{
        readBox.textContent='Not finished';
    }                                          //Change textcontent of elements
    div.setAttribute('id',`${myLibrary.length-1}`);
    document.querySelector('#libraryContainer').appendChild(div);
    let currentCard=document.querySelectorAll('.bookCard')[document.querySelectorAll('.bookCard').length-1];
    currentCard.appendChild(deleteButtonContainer);
    deleteButtonContainer.appendChild(deleteButton);
    deleteButton.appendChild(deleteIcon);
    currentCard.appendChild(titleBox);
    currentCard.appendChild(authorBox);
    currentCard.appendChild(pagesBox);
    currentCard.appendChild(readBox);
    
    clear();
}

function clear(){
    document.getElementById('BookTitle').value='';
    document.getElementById('Author').value='';
    document.getElementById('Pages').value='';
    document.getElementById('ReadOrNot').value='true';
}