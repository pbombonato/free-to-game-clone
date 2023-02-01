import React from "react";
import DropdownMenu from "./DropdownMenu";
import { useState } from "react";
import OutsideClickHandler from 'react-outside-click-handler'

function MenuItem(props) {
    const [dropdown, setDropdown] = useState(false)
    
    if(props.dropdownItems) {

        return (
            <li className="nav-item dropdown">
                <OutsideClickHandler onOutsideClick={()=> setDropdown(false)}>
                    <a
                        className={`nav-link dropdown-toggle ${dropdown ? 'show' : ''}`}
                        href={props.baseUrl}
                        id={"dropdown"+props.itemId}
                        onClick={e=>{
                            e.preventDefault()
                            setDropdown(prev => !prev)}}>
                        {props.text}
                    </a>
        
                    <DropdownMenu 
                        baseUrl={props.baseUrl} 
                        dropdownItems={props.dropdownItems}
                        lastItem={props.lastItem}
                        show={dropdown}
                        />
                </OutsideClickHandler>
            </li>
        )
    }

    else {
        return (
            <li className="nav-item">
                <a href={props.baseUrl} 
                    className={`nav-link js-scroll-trigger`}>
                        {props.text}
                        {props.notification
                            ? <span className={`badge badge-pill badge-ftg`}>
                                {props.notification}
                            </span>
                            : ''
                        }
                    </a>
            </li>
        )
    }
}

export default MenuItem