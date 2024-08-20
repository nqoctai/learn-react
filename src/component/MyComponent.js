import React from "react";
class MyComponent extends React.Component {

    state = {
        name: 'Ngoc Tai',
        address: 'Binh Thuan',
        age: 20
    };

    handleClick = () => {
        console.log(`Click me my button`)
    }

    handleMoveOver = () => {
        console.log(`Move over my button`)
    }
    // JSX
    render() {
        return (
            <div>My first Component
                <br></br>
                My name is: {this.state.name} and I'm from {this.state.address}

                <button onClick={this.handleClick}>Click me</button>
                <button onMouseOver={this.handleMoveOver}>Move over me</button>



            </div>

        );
    }
}

export default MyComponent