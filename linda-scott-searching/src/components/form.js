import React from 'react';
import {linearSearch, binarySearch} from '../helperFunctions';

export default class Form extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
      return(
        <form className='form' onSubmit={e => {
          e.preventDefault(); 
          this.props.handleSubmit(this.input.value);
        }}>
          <input type='text' ref={input => (this.input = input)} />
          <button>{this.props.text}</button>
        </form>    
      )
    }
  
}        