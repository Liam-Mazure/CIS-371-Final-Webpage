import React from 'react'

function Account(){
    return(
        <div className = "userAccount">
            <div className = "user_profile">
                <div >
                    <img id = "user_pic" src = "https://media-exp1.licdn.com/dms/image/C4D03AQEMMDyMhdOjmQ/profile-displayphoto-shrink_800_800/0/1631818966759?e=2147483647&v=beta&t=DONrt7RVHoEb5TqDtrojfkQRorT-9j3_FUYjg_COkJo"></img>
                </div>
                <div >
                    <h1>Liam Mazure</h1>
                    <div className = "userTrack">
                        <h2>Miles Logged: 40</h2>
                        <h2>Trails Visited: 15</h2>
                        <h2>Events Created: 20</h2>
                    </div>
                    <div>
                        <a href='/log'><button id = "rn_log">Running Log</button></a>
                        <a href='/editusr'><button id = "edit_Acount">Edit Account</button></a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Account;