import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            message: 'Hello' 
        }
    }

    clickHandler() {
        this.setState({
            message: 'good bye'
        })
    }
    

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler}>Touch Me</button>
            </div>
        )
    }
}

export default EventBind
