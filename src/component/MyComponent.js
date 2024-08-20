import React from "react";
class MyComponent extends React.Component {

    state = {
        name: 'Ngoc Tai',
        address: 'Binh Thuan',
        age: 20
    };

    handleClick = () => {
        console.log(`Click me my button`)

        this.setState(
            {
                name: 'Eric',
                age: '21'
            }
        )

       
    }

    handleMoveOver = () => {
        console.log(`Move over my button`)
    }

    handleOnChangeInput = (event) => {
        this.setState({name :event.target.value})
    }

    handleOnSubMit =(event) =>{
        event.preventDefault();
        console.log(this.state);
    }
    // JSX
    render() {
        return (
            <div>My first Component
                <br></br>
                My name is: {this.state.name} and I'm {this.state.age}

                <button onClick={this.handleClick}>Click me</button>
                <button onMouseOver={this.handleMoveOver}>Move over me</button>
                <form onSubmit={(event) => {this.handleOnSubMit(event)}}>
                    <input type="text" onChange={(event) => this.handleOnChangeInput(event)}/>
                    <button>Submit</button>
                </form>


            </div>

        );
    }
}

export default MyComponent