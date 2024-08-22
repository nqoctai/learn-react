import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: "Ngoc Tai", age: 16 },
            { id: 2, name: "Ngoc Thang", age: 25 },
            { id: 3, name: "Ngoc Tuan", age: 50 }
        ]
    }

    handleAddNewUser = (userObj) => {
        console.log(userObj);
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }

    handleDeleteUser = (userID) => {
        let listUserClone = [...this.state.listUsers]
        listUserClone = listUserClone.filter(item => item.id !== userID)
        this.setState({
            listUsers: listUserClone
        })
    }

    // JSX
    render() {
        return (
            <>
                <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
                <DisplayInfor listUsers={this.state.listUsers} handleDeleteUser={this.handleDeleteUser} />
            </>

        );
    }
}

export default MyComponent