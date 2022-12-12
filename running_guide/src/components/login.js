import React from 'react'
import {useState} from 'react'

function Login() {
    const [usrname, setUsrname] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(usrname);
    }

    return (
        <span class = "login">
            <h1>Login</h1> 
            <form class = "logform" onSubmit = {handleSubmit}>
                <label for = "usrname">Username:</label><br></br>
                <input id = "usrname" type="text"></input><br></br>
                <label for = "password">Password:</label><br></br>
                <input id = "passwrd" type="password"></input><br></br>

                <a href = "/home"><button id = "login_submit">Login</button></a>
            </form>
        </span>
    );

}

export default Login;