import React from "react";

function FooterLink(props) {
    return (
        <p>
            <a href={props.link}>{props.title}</a>
        </p>
    )
}

export default FooterLink