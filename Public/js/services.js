var myApp = angular.module('myApp');

//think Constructor function
//can include [] next to BookService to pass into
myApp.service('BookService', BookService);

//able to do an INSTANCE of the service
function BookService () {
  //making books public
  //able to ref. outside due to this.getBooks
  var books = this.books =[
   {title:'Ready Player One', author: 'Some Body'},
  {title:'LuckyEveryday', author: 'Some Body'},
  {title:'Harry Potter', author: 'Some Body'},
  {title:'Last Lecture', author: 'Some Body'},
  ];

  this.addBook = function (title, author) {
    var newBook = {
      title: title,
      author: author
    };
    //instantiate newBook passed in
    books.push(newBook);
  };

  this.getBooks = function () {
    return this.books;
  };

  this.getBook = function (index) {
    if (index < 0 || index >= books.length){
      return null;
    }
    return books[index];
  };
}

