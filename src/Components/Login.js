import React, {useState} from 'react';
import axios from "axios";

const Login = () => {
    const [existingUser, setExistingUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = event => {
        event.preventDefault();
        const {name, value} = event.target;
        setExistingUser({...existingUser, [name]: value})
    }

    const handleSubmit = event => {
        event.preventDefault();
        axios.post("http://localhost:5000/login")
            .then(res => {
                console.log(res)
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <form>
                <label>Enter email</label>
                    <input 
                        name="email" 
                        type="email" 
                        value= {existingUser.email}
                        onChange= {handleChange}
                    /> 
                <label>Enter password</label>
                    <input
                        name="password"
                        type='password' 
                        value= {existingUser.password}
                        onChange= {handleChange}
                    />
                <button onClick={handleSubmit}>Log in</button>
            </form>
        </div>
    );
};

export default Login;