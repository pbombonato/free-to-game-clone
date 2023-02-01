import React from "react";

function PlatformIcon(props) {
    let platform = ''
    switch (props.platform) {
        case "PC (Windows)":
            platform = "fab fa-windows"
            break
        case "Web Browser":
            platform = "fas fa-window-maximize"
            break
        default: 
            platform = ""
    } 

    return (
        <div className="col-1 align-self-center text-center text-muted justify-content-center d-none d-sm-block">
            <h5>
                <i className={platform}></i>
            </h5>
        </div>
    )
}

export default PlatformIcon