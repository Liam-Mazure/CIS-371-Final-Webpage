import React, {useState, useEffect} from 'react'
import Axios from 'axios'

function Edituser() {

    const [fname, setfname] = useState('')
    const [lname, setlname] = useState('')
    const [usrname, setusrname] = useState('')
    const [password, setpassword] = useState('')
    const [email, setemail] = useState('')

    const submitUsr = () => {
        Axios.post('http://localhost:3001/api/insert', {fname: fname, lname: lname, usrname: usrname, password: password, email: email,
    }).then(() => {
            alert("Successful Insert")
        });
    };

    return (
        <div className = "accountForm">
            <h1>Edit Account</h1> 
            <form class = "editAccount">

                <label for = "fname">First Name:</label><br></br>
                <input id = "fname" type="text" name = "fname" onChange = {(e) => {
                    setfname(e.target.value)}}></input><br></br>

                <label for = "lname">Last Name:</label><br></br>
                <input id = "lname" type="text"  name = "lname" onChange = {(e) => {
                    setlname(e.target.value)}}></input><br></br>

                <label for = "usrname">Username:</label><br></br>
                <input id = "usrname" type="text"  name = "usrname" onChange = {(e) => {
                    setusrname(e.target.value)}}></input><br></br>

                <label for = "password">Password:</label><br></br>
                <input id = "passwrd" type="password"  name = "password" onChange = {(e) => {
                    setpassword(e.target.value)}}></input><br></br>

                <label for = "password2">Verify Password:</label><br></br>
                <input id = "passwrd2" type="password"></input><br></br>

                <label for = "email">Email:</label><br></br>
                <input id = "email" type="email"  name = "email" onChange = {(e) => {
                    setemail(e.target.value)}}></input><br></br>

                <button id = "crtUser_submit_btn" type="submit" onClick = {submitUsr}>Submit</button>
            </form>
        </div>
    );

}

export default Edituser;