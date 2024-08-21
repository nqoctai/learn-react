import React from "react";

class UserInfor extends React.Component {
    state = {
        name: 'Ngoc Tai',
        address: 'Binh Thuan',
        age: 20
    };


    handleOnChangeInput = (event) => {
        this.setState({ name: event.target.value })
    }

    handleOnSubMit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div>
                My name is: {this.state.name} and I'm {this.state.age}
                <button onClick={this.handleClick}>Click me</button>
                <button onMouseOver={this.handleMoveOver}>Move over me</button>
                <form onSubmit={(event) => { this.handleOnSubMit(event) }}>
                    <input value={this.state.name} type="text" onChange={(event) => this.handleOnChangeInput(event)} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}


export default UserInfor;