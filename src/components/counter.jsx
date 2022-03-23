import React from 'react';
import '../index.css';

export default function Counter(){
  return(
    <div className="counter-div">
      <h1>0</h1>
      <button className="count bt">Count</button><br/>
        <button className="reset bt">Reset</button>
    </div>
    )
}