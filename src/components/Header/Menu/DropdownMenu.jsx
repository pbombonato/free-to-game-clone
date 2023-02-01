import React from "react";
import DropdownItem from "./DropdownItem";

function DropdownMenu(props) {
    const arrayItems = []

    for(let item of props.dropdownItems) {
        arrayItems.push(<DropdownItem baseUrl={props.baseUrl} category={item} />)
    }

    const lastItem = props.lastItem 
                        ? [
                            <div className="dropdown-divider"></div>,
                            <a href={props.baseUrl} className="dropdown-item a2">
                                {props.lastItem}
                            </a>
                        ]
                        : ''


    return (
        <ul
            className={`dropdown-menu ${props.show ? 'show' : ''}`}
            >
            
            {arrayItems}
            {lastItem}
        </ul>
    )
}

export default DropdownMenu