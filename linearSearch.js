'use strict';
/* global $ */
/*
Given the following dataset, find out how many tries did it take to search for a particular item in the dataset. If the item is not in the dataset, provide a message and indicate how many searches did it take to do so.

89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5
*/

//const arr = [89,30,25,32,72,70,51,42,25,24,53,55,78,50,13,40,48,32,26,2,14,33,45,72,56,44,21,88,27,68,15,62,93,98,73,28,16,46,87,28,65,38,67,16,85,63,23,69,64,91,9,70,81,27,97,82,6,88,3,7,46,13,11,64,76,31,26,38,28,13,17,69,90,1,6,7,64,43,9,73,80,98,46,27,22,87,49,83,6,39,42,51,54,84,34,53,78,40,14,5];
const arr = [89,30,25,32,72,70,51,42,25,24,53,55,78,50,13,40,48,32,26,2,14,33,45,72,56];
// const value = 89;
let count = 0;

function linearSearch(arr, value) {
  for (let i = 0 ; i < arr.length ; i++) {
    count++;
    if(arr[i] === value){
      console.log('Item found', value);
      console.log('Number of tries was', count);
      return value;
    }
  }
  console.log('Item was not found');
  console.log('Number of tries was', count);
  return -1;//convention to use -1, indicate not found to leverage for other functions that utilize linearSearch
}



//console.log(linearSearch(arr, value));


/*
Binary search
Use the same front end and the dataset from the previous exercise for this one. Use array.sort to sort the dataset. Then implement Binary search to find a particular value in the dataset. Display how many tries it takes to search a particular item in the dataset using binary search. If the item is not in the dataset, provide a message and indicate how many searches did it takes to do so.
*/

function binarySearch(arr, value, start=0, end=arr.length-1) {
  const sortedArray = arr.sort();
  let index = Math.floor((start + end)/2);
  let item = sortedArray[index];
  count++;

  if (start > end) return -1;

  if (value === item) {
    // console.log('array', sortedArray);
    console.log('count equals', count);
    //console.log(sortedArray[index]);
    return index;
  }

  else if (value > item) {
    return binarySearch(sortedArray, value, index + 1, end);
  }

  else if (value < item) {
    return binarySearch(sortedArray, value, start, index - 1);
  }
}


// console.log(binarySearch(arr, value));

$(function(){

  $('#linear').click(function(e){   
    console.log('linear was pressed');
    const value = $('input').val();
    linearSearch(arr, value);
    $('.results').html('linear search ran');
  });  

  $('#binary').click(function (e) {
    console.log('binary was pressed');
    const value = $('input').val();
    binarySearch(arr, value);
    $('.results').html('binary search ran');
  }); 

});
