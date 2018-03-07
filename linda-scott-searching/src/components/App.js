import React from 'react';
import {linearSearch, binarySearch, resetCount, resetArray} from '../helperFunctions';
import Form from './form';
import DisplayResults from './displayResults';

export default class App extends React.Component{
    constructor(props){
    super(props);
      this.state = {
        array:[89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56],
        count: 0
      }
    }  
  runLinearSearch(value) {
    const count = linearSearch(this.state.array, parseInt(value, 10));
    this.setState({count});
    resetCount();
  }

  runBinarySearch(value) {
    const count = binarySearch(this.state.array, parseInt(value, 10));
    this.setState({count});
    resetCount();
    this.setState({array: resetArray()});
  }

  render(){
    return(
      <section>
        <Form handleSubmit={value => this.runLinearSearch(value)} text='Linear Search'/> 
        <Form handleSubmit={value => this.runBinarySearch(value)} text='Binary Search'/> 
        <DisplayResults count={this.state.count}/>
      </section>
    )
  }
}