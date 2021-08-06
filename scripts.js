function Book(title, author, pages,read){
    this.title=title;
    this.author=author;
    this.page=pages;
    isRead=read;
    this.info=function(){
        let status;
        if(isRead){
            status='finished reading'
        }else{
            status='not read'
        }
        return `${title} by ${author}, ${pages} pages, ${status}`;
    }; 
}

const theHobbit=new Book('The Hobbit','J.R.R Tolkein',295,false);
console.log(theHobbit.info());