import React from "react";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

function NavIcon(props) {
    return (
        <li className="nav-item">
            <a id={props.mobileTitle} href={props.link} className={`nav-link`} >
                <i className={`fas fa-${props.icon}`}></i>
                <span className="ml-1 d-lg-none"> {props.mobileTitle}</span>
            </a>

            <Tooltip
                className="bg-primary py-1 px-2"
                anchorId={props.mobileTitle}
                place="bottom"
                content={props.tooltipText}
            />
        </li>
    )
}

export default NavIcon