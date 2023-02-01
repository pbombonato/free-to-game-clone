import React from "react"
import OutsideClickHandler from "react-outside-click-handler"
import { useState } from "react"

function OtherSites(props) {
    const [dropdown, setDropdown] = useState(false)

    function dropdownItem(itemName) {
        return (
            <a 
                target="_blank"
                href={`https://www.${itemName.toLowerCase()}.com`}
                rel="noopener noreferrer"
                className="dropdown-item"
                >
                {itemName}       
            </a> 
        )
    }

    return (
        <li className={`nav-item dropdown ${dropdown ? 'show' : ''}`}>   
            <OutsideClickHandler onOutsideClick={()=>setDropdown(false)}>

                <a 
                    href="#" 
                    className={`nav-link`}
                    onClick={e => {
                        e.preventDefault()
                        setDropdown(prev=>!prev)
                    }}>
                    
                    <i className="fas fa-ellipsis-h"></i>
                </a>
                <div 
                    className={`dropdown-menu shadow ${dropdown ? 'show' : ''}`}>
                    <h6 className="dropdown-header">
                        Explore our other sites
                    </h6>

                    {dropdownItem('GamerPower')}
                    {dropdownItem('MMOBomb')}
                    {dropdownItem('GamesCamp')}             
                </div>

            </OutsideClickHandler>
        </li>
    )
}

export default OtherSites