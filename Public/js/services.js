var myApp = angular.module('myApp');

//think Constructor function
//can include [] next to BookService to pass into
myApp.service('BookService', BookService);

//able to do an instance of the service
function BookService () {
  var books = [
   {title:'Ready Player One', author: 'Some Body'},
{title:'LuckyEveryday', author: 'Some Body'},
{title:'Harry Potter', author: 'Some Body'},
{title:'Last Lecture', author: 'Some Body'},
  ];

  this.getBooks = function () {
    return books;
  };

  this.getBook = function (index) {
    if (index < 0 || index >= books.length){
      return null;
    }
    return books[index];
  };
}

