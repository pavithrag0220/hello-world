import React, { Component } from 'react';

class Welcome extends Component {
    render(){
        const {name, heroName} = this.props //destructing props in render()
        // const {state1 , state2} = this.state // destructing state properties syntax in render()
        return (
            <h1>
                Welcome {name} a.k.a {heroName}
            </h1>
        )
    }
}

export default Welcome;
