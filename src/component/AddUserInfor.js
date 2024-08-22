import React, { useState } from "react";

const AddUserInfor = (props) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');



    const handleOnChangeInput = (event) => {
        setName(event.target.value)
    }

    const handleOnSubMit = (event) => {
        event.preventDefault();
        props.handleAddNewUser(
            {
                id: Math.floor((Math.random() * 100) + 1) + '-random',
                name: name,
                age: age
            }
        );
    }

    const handleChangeAge = (event) => {
        setAge(event.target.value)
    }
    return (
        <div>
            My name is: {name} and I'm {age}
            <form onSubmit={(event) => { handleOnSubMit(event) }}>
                <label>Your name: </label>
                <input value={name} type="text" onChange={(event) => handleOnChangeInput(event)} />
                <button>Submit</button>

                <label>Your age: </label>
                <input value={age} type="text" onChange={(event) => handleChangeAge(event)} />
                <button>Submit</button>
            </form>
        </div>
    )
}


export default AddUserInfor;