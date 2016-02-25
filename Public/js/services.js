var myApp = angular.module('myApp');

//think Constructor function
//can include [] next to BookService to pass into
myApp.service('BookService', BookService);

//able to do an instance of the service
function BookService () {
  var books = [
   'Ready Player One',
   'LuckyEveryday',
   'Harry Potter',
   'Last Lecture'
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

