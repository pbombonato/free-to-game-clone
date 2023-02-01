import React from "react";

function DropdownItem(props) {
    const href = props.baseUrl + '/' + props.category.toLowerCase().replace('browser ','').replace(' ','-')

    return (
        <li>
            <a
                className="dropdown-item"
                href={href}>
                {props.category}
            </a>
        </li>
    )
}

export default DropdownItem