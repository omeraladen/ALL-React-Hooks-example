import React, { useReducer } from 'react'

const reducer = (state , action) => {
     switch (action.type) {
        case "increment":
            return { 
                count : state.count + 1 ,
                showText: state.showText
            }

        case "toggleShowText":
            return { 
                count : state.count ,
                showText: !state.showText
            }
        default: 
            return state;
     }
}


const UseReducer = () => {
  const [ state , dispatch ] = useReducer(reducer , 
    {
        count: 0 ,
        showText : true
    }
    );
  
    return (
    <div>

        {state.count}

        <button onClick={ () => {
            dispatch({ type : "increment" })
            dispatch({ type : "toggleShowText" })
            
        }}>
            Change Num and Text
        </button>
        { state.showText && <p> Text Is Shown ! </p> }

    </div>
  )
}

export default UseReducer