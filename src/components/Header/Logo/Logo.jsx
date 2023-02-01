import React from "react";
import LogoPNG from './freetogame-logo.png'


function Logo(props) {
    return (
        <a
            href="/" 
            className="navbar-brand mt-n2 mb-n2"
            style={{padding: ".75rem 1rem",marginRight:"0"}}>
            <img 
                src={LogoPNG} 
                alt="FreeToGame"
                height="45" />
        </a>
    )
}

export default Logo