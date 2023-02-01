import React from "react";

function MobileMenu(props) {
    return (
        <button 
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation">

            <span className="navbar-toggler-icon" />
        </button>
    )
}

export default MobileMenu