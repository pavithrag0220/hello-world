import React, { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    increment() {
        // this.state.count = this.state.count + 1 
        // (never do this)
        
    //     this.setState({
    //         count: this.state.count + 1
    //     }
    //     , () => console.log('callback value', this.state.count )         
    //     );
    //     console.log(this.state.count);
    // }
    //to update the state value use function as a argument , not directly the object  

    this.setState((prevState, props) => ({
        count: prevState.count + 1 
    }))
    console.log(this.state.count)
}

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    

    render() {
        return (
            <div>
                <h1>Counter Class Component - {this.state.count}</h1>
                <button onClick={() => this.incrementFive()}> Increment </button>
            </div>
        )
    }
}

export default Counter;
