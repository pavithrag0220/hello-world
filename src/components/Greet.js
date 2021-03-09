import React from 'react';

export const Greet = ({name, heroName}) => { // destructing in parameter
    
    // Const Greet = props => {
    //     const {name , heroName} = props
    // above lines -> destructing in function body
    
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
        </div>
    );
}

// export default Greet;
