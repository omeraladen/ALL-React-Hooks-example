import React, { useReducer } from 'react'

/*
?1 When We Need To use useReducer(); instead of  useState();

    ?1 (1) when you have complex state logic
    ?1 (2) If you’re familiar with Redux, you already know how this works.
    ?1 (3) multiple sub-values or when the next state depends on the previous
    ?1 (3) also lets you optimize performance for components that trigger deep updates

*/

// const reducer = (state , action) => {
//      switch (action.type) {
//         case "increment":
//             return { 
//                 count : state.count + 1 ,
//                 showText: state.showText
//             }

//         case "toggleShowText":
//             return { 
//                 count : state.count ,
//                 showText: !state.showText
//             }
//         default: 
//             return state;
//      }
// }


// const UseReducer = () => {
//   const [ state , dispatch ] = useReducer(reducer , 
//     {
//         count: 0 ,
//         showText : true
//     }
//     );
  
//     return (
//     <div>

//         {state.count}

//         <button onClick={ () => {
//             dispatch({ type : "increment" })
//             dispatch({ type : "toggleShowText" })
            
//         }}>
//             Change Num and Text
//         </button>
//         { state.showText && <p> Text Is Shown ! </p> }

//     </div>
//   )
// }

const reducer = (state  , action) => {
    switch (action.type) {
      
        case "increment" :
            return { ...state, count: state.count + 1 }
        case "decrement" :
            return {...state, count : state.count - 1}

        case "changeText":
            return {...state, useInput : action.payload }
        default :
            return state;
    }
}
 

const UseReducer = () => {
    const [state,dispatch] = useReducer(reducer , {
        count: 0,
        useInput : '...'
        
    })

    return (
    <div >
        {state.count}
        <button onClick={() => { dispatch({type : "increment"})}}>+</button>
        <button onClick={() => { dispatch({type : "decrement"})}}>-</button>
        <hr />
       
        <input placeholder='Enter...' onChange={e => { 
            dispatch({ type : 'changeText', payload: e.target.value })
         }} />
        <br />
        {state.useInput}
    </div>
  )
}


export default UseReducer;