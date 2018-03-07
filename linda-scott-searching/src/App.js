import React from 'react';


export default class App extends React.Component{
    constructor(props){
    super(props);
      this.state = {
        array:[89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56]
      }
    }  

  linearSearch(arr, value) {
    console.log('array:', arr);
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
      count++;
      if (arr[i] === value) {
        console.log('Item found', value);
        console.log('Number of tries was',count);
        return value;
      }
    }
    console.log('Item was not found');
    console.log('Number of tries was',count);
    return -1;//convention to use -1, indicate not found to leverage for other functions that utilize linearSearch
}
    
  binarySearch(arr, value, start = 0, end = arr.length - 1) {
    
    const sortedArray = arr.sort();
    let index = Math.floor((start + end) / 2);
    let item = sortedArray[index];
    this.setState({ count: this.state.count + 1 });

    if (start > end) return -1;

    if (value === item) {
      // console.log('array', sortedArray);
      console.log('count equals', this.state.count);
      //console.log(sortedArray[index]);
      return index;
    }

    else if (value > item) {
      return this.binarySearch(sortedArray, value, index + 1, end);
    }

    else if (value < item) {
      return this.binarySearch(sortedArray, value, start, index - 1);
    }
}

runLinearSearch(e){
    e.preventDefault();
    this.linearSearch(this.state.array, parseInt(this.input.value, 10));
}
// this.linearSearch(this.array, input.value)

  render(){
    return(
      <div>
        <input type='text' id='input' ref={input=> (this.input = input)}/>
        <button id='linear' onClick={e => this.runLinearSearch(e)}>Linear Search</button>
        <button id='binary'>Binary Search</button>
      </div>
    )
  }
}