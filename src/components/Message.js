import React, { Component } from 'react';

class Message extends Component {

    constructor(){
        super()
        this.state = {
            maessage: 'Welcome Visitors'
        }
    }

    changeMessage() {
        this.setState({
            maessage: 'Thank You for subscribing'
        })

    }

    render(){
        return (
            <div>
                <h1>
                   {this.state.maessage}
                </h1>
                <button onClick={() => this.changeMessage() }>Subscribes</button>
            </div>
        );
    }
}

export default Message;
