import React from "react";

export default class ComponentDidUpdate extends React.Component {
    constructor() {
        super();

        this.state = {
          count: 0
        };

        this.increment = () => {this.setState({count: this.state.count + 1})}
        this.decrement = () => {this.setState({count: this.state.count - 1})}

        
    }
    
   
    
    componentDidUpdate(prevState, nextState){
        console.log('Updated')
        if(prevState.count !== nextState.count ){
            alert('updated')
        }
    }

  

    render() {
      
        return (

            <div className="counter">
                 <h1>{this.state.count}</h1>
                 <button onClick={this.increment}>increment</button>
            </div>
        )
    }
}

/*

componentDidUpdate() 

1- You may call setState() immediately but note that it must be wrapped in a condition
2-  will not be invoked if shouldComponentUpdate() returns false.
3- if you learn useEffect() hook its better to used
4- 
    
*/