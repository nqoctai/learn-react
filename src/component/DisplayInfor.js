import React, { useEffect, useState } from "react";
import UserInfor from "./AddUserInfor";
import './DisplayInfor.scss';
import logo from './../logo.svg'


const DisplayInfor = (props) => {
    const { listUsers } = props;
    const [isShowHideListUser, setIsShowHideListUser] = useState(true);

    const handleShowHideListUsser = () => {
        setIsShowHideListUser(!isShowHideListUser)
    }

    useEffect(() => {
        if (listUsers.length === 0) {
            alert('No user infor')
        }
        console.log('List user change')
    }, [listUsers])
    return (
        <div className='display-infor-container'>
            <div>
                <span onClick={() => handleShowHideListUsser()}>{isShowHideListUser ? "Hide List User" : "Show List User"}</span>
            </div>
            {
                isShowHideListUser &&
                <>
                    {
                        listUsers.map((user) => {

                            return (
                                <div key={user.id} className={user.age < 18 ? "red" : "green"}>
                                    <div>My name is: {user.name}, </div>
                                    <div>My age is: {user.age} , <br /></div>
                                    <div>
                                        <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                    </div>

                                </div>

                            )
                        })
                    }
                </>
            }

        </div>

    )
}


export default DisplayInfor;