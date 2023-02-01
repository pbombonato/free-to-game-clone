import React from "react";

function BlueButton(props) {
    return (
        <a href={props.link} className={`btn btn-ftg-blue ${props.customClass}`}>{props.content}</a>
    )
}

function GrayButton(props) {
    return <a href={props.link} className={`btn btn-outline-secondary btn-md ml-0 ${props.customClass}`}>{props.content}</a>
}

export {
    BlueButton,
    GrayButton
}