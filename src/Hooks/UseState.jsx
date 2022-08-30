
import React, { useState } from 'react';

/*
?1 When We Need useState();

    ?1 (1) when you need to Returns a stateful value, and a function to update it
    ?1 (2) the first value returned by useState will always be the most recent state after applying updates.


*/

//  example (1) simple increment number

const UseState = () => {
  
  let [ counter , setCounter ] = useState(0)
  const increment = () => {
    setCounter(counter + 1)
  }
  return (
    <div>
      {counter}
      <button onClick={increment}>increment</button>
    </div>
  )
}


/* example (2) typing something and displayed to screen same time

const UseState = () => {
  let [inputValue , setInputValue] = useState('🚗');

  let changeState = (event) => {
    let newValue = event.target.value;
    console.log(newValue)
    setInputValue(newValue) 

  }

  return (
    <div>
      <input onChange={changeState} placeholder='type Car...'  />
      {inputValue}
    </div>
  )
}
*/


/* use Class Component with No Hook
class UseState extends React.Component{
  constructor(){
    super();

    this.state ={
      count:0
    };
  }
  
  Increment = () => {
    this.setState({
      count : this.state.count + 1
    })
 }
  render(){
    

    
  
    return (
      <div>
       <p>the count = {this.state.count}</p>
       <button onClick={this.Increment}>click </button>
    </div>
    )
  }
}
*/



export default UseState;

