'use strict';

const library = [
  { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },
  { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
  { author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' },
  { author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' },
  { author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' },
  { author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' },
  { author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
  { author: 'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
  { author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships' },
  { author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }
];

//go first to the section with the first number in the string
//if the number is is higher than where you are, move right, if lower, move left
// once you find that, then match the second number in the string
// then the third number in the string
//then the 4th

//starting from the 'front' of the decimal number, for each digit the decimal system, look to see if your item to match is higher or lower than the number on the shelf.  If it's higher, move to the right, if lower, move to the left.

// once you have matched your number, look at the first letter of the Aurhor's last name... if it's closer to A than where you are move left... if it's farther from A, move right until you match the author.

//once you have matched your author, check the specific title.

let count = 0;

function findBook(book, library, searchStart=0, searchEnd=library.length-1){
 
  count++;

  const dewey = book.dewey;
  const author = book.author;
  const title = book.title;

  const index = Math.floor((searchStart + searchEnd) / 2);
  const currentBook = library[index];
  
  const currentDewey = currentBook.dewey;
  const currentAuthor = currentBook.author;
  const currentTitle = currentBook.title;

 
  if (currentDewey === dewey){

    if(currentAuthor === author) {

      if(currentTitle === title) {
        return (
          {index, count, book: library[index]}
        );
      }  
      else if (currentTitle > title) {
        return findBook(book, library, index - 1, index - 1);
      }
      else if (currentTitle < author) {
        return findBook(book, library, index + 1, index + 1);
      }

    }
    else if (currentAuthor > author){
      return findBook(book, library, index - 1, index - 1);
    }
    else if (currentAuthor < author) {
      return findBook(book, library, index + 1, index + 1);
    }
  }

  else if (currentDewey < dewey) {
    return findBook(book, library, index + 1, searchEnd);
  }
  else if (currentDewey > dewey) {
    return findBook(book, library, searchStart, index - 1);
  }

}  

// console.log(findBook({ author:'Jane, Frederick Thomas', dewey:'623.82509051', title:'Jane\'s Fighting Ships' }, library));
console.log(findBook({ author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' }, library));
// console.log(findBook(, library));