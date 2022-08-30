import React,{useEffect, useState} from 'react'
import axios from 'axios';

/*
?1 Use Axios , API 
    ?? NOTE !
    ?1 (1) useEffect() render it function after the page is render
    ?1 (2) use =>/  , [])   /in the last bracket to make the function get called one time 
    

*/

const UseEffect = () => {

 

const [data , setData] = useState("");


  useEffect(()=> {
   


    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
    
      setData(response.data[0].name)
      console.log('~ API GET CALLED ~')
      
      
   });
  }, []); 
  
  return (
    <div>
      
      <h1> The of the First User is: {data} </h1>
    </div>
  )
}

export default UseEffect;