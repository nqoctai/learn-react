import React from "react";
import UserInfor from "./Userinfor";

class DisplayInfor extends React.Component {
    render() {

        // destructuring

        const { listUsers } = this.props;
        console.log(listUsers);
        return (
            <div>
                {
                    listUsers.map((user) => {
                        return (
                            <div key={user.id}>
                                My name is: {user.name}, <br />
                                My age is: {user.age} , <br />
                            </div>
                        )
                    })
                }
                {/* My name is: {name}, <br />
                My age is: {age}, <br />
                My infor is: {myInfor} */}
            </div>
        )
    }
}

export default DisplayInfor;