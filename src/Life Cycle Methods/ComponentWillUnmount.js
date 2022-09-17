
import React from "react";

class ComponentOne extends React.Component {
 
    // Defining the componentWillUnmount method
    componentWillUnmount() {
      alert('The component is going to be unmounted');
    }
   
    render() {
      return <h1>Hello Geeks!</h1>;
    }
  }

export default class ComponentWillUnmount extends React.Component {
    constructor() {
        super();

        this.state = {
          show: true
        };

        

    }
    

    render() {
        console.log('render')
        return (

            <div className="counter">

               {this.state.show ? <ComponentOne/> : null}

                <button onClick={() => {
                    this.setState({ show: false })
                }}>Delete Component</button>
                
            </div>
        )
    }
}

/*

ComponentWillUnmount() 

1-will be called right before a component is removed from the DOM.
2- is used to do any necessary cleanup / canceling any timers , intervals , ... / before the component disappears.
3- Note that the this.setState() method should not be called inside it
    because the component will not be re-rendered.
4- 
    
*/