import React from 'react'
//I have the login button which then uses a context to set data that is used in the application.
const DemoButton = () => {

    const handleLogin = () => {
        window.location.href = '/home';
    }
    return(
        <button className={"primaryButton"} onClick={handleLogin}>
            Enter Demo
        </button>
    )
}

export default DemoButton;