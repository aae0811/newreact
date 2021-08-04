import React from 'react';

class Component2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {surname:"Abdurakhmonov"};
    }
    

    render() {
        return (
            <div>
                <h2>My surname is {this.state.surname}</h2>
            </div>
        );
    }
}


export default Component2;
