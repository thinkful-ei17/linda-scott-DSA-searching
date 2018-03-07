import React from 'react';

export default function DisplayResults(props){
  if(props.count === -1){
    return (
      <p>The item was not found.</p>
    );
  }
  else{
    return(
      <p>Item was found in {props.count} tries</p>
    )
  }
}