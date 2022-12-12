import React from 'react'

function Home() {

    return(
        <div className = "home">
            <h1 id = "home_title">Create Your Own Custom Running Plan</h1>
            <p id = "home_text">Let the trail take you on a journey.</p>
            <a href = "/createplan"><button id = "createPlanbtn">Create Plan</button></a>
        </div>
    );
}

export default Home;