import React from "react";

export default class Counter extends React.Component {
    constructor() {
        super();

        this.state = {
          message: "This is initial message"
        };

    }
    
    componentDidMount(){
        this.setState({ message: 'This is Updated Massage✨' })
    }

    render() {
        console.log('render')
        return (

            <div className="counter">
               <h1>{this.state.message}</h1>
            </div>
        )
    }
}

/*

componentDidMount() 

1-it get called before the page render 
2- once in a lifetime of a component.
3- it usually used in API calls and change the initial State by using setState()
4- is primarily used to implement server-side logic before the actual rendering happens
    
*/