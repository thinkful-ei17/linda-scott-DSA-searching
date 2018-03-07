import React from 'react';
import {linearSearch, binarySearch} from './helperFunctions';

export default class App extends React.Component{
    constructor(props){
    super(props);
      this.state = {
        array:[89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56]
      }
    }  

  runLinearSearch(e){
      e.preventDefault();
      linearSearch(this.state.array, parseInt(this.input.value, 10));
  }

  runBinarySearch(e) {
      e.preventDefault();
      binarySearch(this.state.array, parseInt(this.input.value, 10));
    }


  render(){
    return(
      <div>
        <input type='text' id='input' ref={input=> (this.input = input)}/>
        <button id='linear' onClick={e => this.runLinearSearch(e)}>Linear Search</button>
        <button id='binary' onClick={e=> this.runBinarySearch(e)}>Binary Search</button>
      </div>
    )
  }
}