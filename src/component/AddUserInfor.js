import React from "react";

class AddUserInfor extends React.Component {
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
        this.props.handleAddNewUser(
            {
                id: Math.floor((Math.random() * 100) + 1) + '-random',
                name: this.state.name,
                age: this.state.age
            }
        );
    }
    render() {
        return (
            <div>
                My name is: {this.state.name} and I'm {this.state.age}
                <form onSubmit={(event) => { this.handleOnSubMit(event) }}>
                    <input value={this.state.name} type="text" onChange={(event) => this.handleOnChangeInput(event)} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}


export default AddUserInfor;