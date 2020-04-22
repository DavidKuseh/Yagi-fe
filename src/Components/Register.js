import React, { useState } from "react";
import axios from "axios";

const Register = (props) => {
    const [newUser, setNewUser] = useState({ 
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    const handleChange = event => {
        event.preventDefault();
        const {name, value} = event.target;
        setNewUser({...newUser, [name]: value})
    };

    const handleSubmit = event => {
        event.preventDefault();
        axios.post("http://localhost:5000/register")
            .then(res => {
                console.log(res)
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>First name: </label>
                    <input 
                        type='text' 
                        name='first_name' 
                        onChange={handleChange} 
                        value = {newUser.firstName}
                        placeholder='Enter first name'
                    />
                <label>Last name: </label>
                    <input 
                        type='text' 
                        name='last_name' 
                        onChange={handleChange} 
                        value= {newUser.lastName}
                        placeholder='Enter first name'
                    />
                <label>Email: </label>
                    <input 
                        type='email' 
                        name='email' 
                        onChange={handleChange}
                        value= {newUser.email} 
                        placeholder='Enter email'
                    />
                <label>Password: </label>
                    <input 
                        type='password' 
                        name='password' 
                        onChange={handleChange} 
                        value = {newUser.password}
                        placeholder='Enter password'
                    />
                <button onClick={handleSubmit}>Create Account</button>
            </form>
        </div>
    );
};

export default Register;