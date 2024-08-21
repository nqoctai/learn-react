import React from "react";
import UserInfor from "./AddUserInfor";
import './DisplayInfor.scss';
import logo from './../logo.svg'

class DisplayInfor extends React.Component {

    state = {
        isShowListUser: true
    }
    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }

    render() {

        // destructuring
        const { listUsers } = this.props;
        console.log(listUsers);
        return (
            <div className='display-infor-container'>
                <img src={logo}></img>
                <div>
                    <span onClick={() => { this.handleShowHide() }}> {this.state.isShowListUser ? "Hide" : "Show"} list user</span>
                </div>
                {
                    this.state.isShowListUser &&
                    <div>
                        {
                            listUsers.map((user) => {

                                return (
                                    <div key={user.id} className={user.age < 18 ? "red" : "green"}>
                                        My name is: {user.name}, <br />
                                        My age is: {user.age} , <br />
                                    </div>
                                )
                            })
                        }
                    </div>
                }

            </div>

        )
    }
}

export default DisplayInfor;