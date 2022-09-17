import React from "react";

export default class ComponentWillMount extends React.Component {
    constructor() {
        super();

        this.state = {
          message: []
        };

    }
    
    UNSAFE_componentWillMount() {
        fetch("https://jsonplaceholder.typicode.com/todos")
          .then(response => response.json())
          .then(json => {
            this.setState({ message: json[0] });
          });
    }
 

    render() {
        console.log('render')
        return (

            <div className="counter">
              
               <h1>{this.state.message.title}</h1>

            </div>
        )
    }
}

/*

componentWillMount() => continue to work until version 17

1- is to make API calls once the component is initiated 
2- and configure the values into the state.
3-  will not re-run the component again and again, unlike other life-cycle methods.
4- Avoid introducing any side-effects or subscriptions in this method. 
    For those use cases, use componentDidMount() instead.
    
*/