import React from "react";
class MyComponent extends React.Component {

    state = {
        name: 'Ngoc Tai',
        address: 'Binh Thuan',
        age: 20
    };
    // JSX
    render() {
        return (
            <div>My first Component
                <br></br>
                My name is: {this.state.name} and I'm from {this.state.address}
            </div>

        );
    }
}

export default MyComponent