import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

const MyComponent = () => {
    const [listUsers, setListUsers] = useState([
        { id: 1, name: "Ngoc Tai", age: 16 },
        { id: 2, name: "Ngoc Thang", age: 25 },
        { id: 3, name: "Ngoc Tuan", age: 50 }
    ])
    const handleAddNewUser = (userObj) => {
        console.log(userObj);
        setListUsers([userObj, ...listUsers])
    }

    const handleDeleteUser = (userID) => {
        let listUserClone = [...listUsers]
        listUserClone = listUserClone.filter(item => item.id !== userID)
        setListUsers(listUserClone)
    }
    return (
        <>
            <AddUserInfor handleAddNewUser={handleAddNewUser} />
            <DisplayInfor listUsers={listUsers} handleDeleteUser={handleDeleteUser} />
        </>

    );
}

export default MyComponent