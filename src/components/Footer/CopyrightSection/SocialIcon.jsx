import React from "react";

function SocialIcon(props) {
    return (
        <li className="list-inline-item">
            <a 
                className='btn-floating btn-sm rgba-white-slight mx-1'
                href={props.link}
                aria-label={props.title}
                rel="noopener noreferrer" 
                target="_blank">

                <i style={{fontSize:"1.1rem"}} className={`fab fa-${props.title.toLowerCase()}`}></i>
            </a>
        </li>
    )
}

export default SocialIcon