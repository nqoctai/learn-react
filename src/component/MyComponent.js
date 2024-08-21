import React from "react";
import UserInfor from "./Userinfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: "Ngoc Tai", age: 20 },
            { id: 2, name: "Ngoc Thang", age: 25 },
            { id: 3, name: "Ngoc Tuan", age: 50 }
        ]
    }

    // JSX
    render() {
        const myAge = 15;
        const myInfor = ['Ngoc Tai', 'Binh Thuan', 20];
        return (
            <div>
                <UserInfor />
                <DisplayInfor listUsers={this.state.listUsers} />

            </div>

        );
    }
}

export default MyComponent