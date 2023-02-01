import React from "react";
import NavIcon from "./NavIcon";

import JoinFreeButton from "./JoinFreeButton";

function RightList(props) {
    return (
        <ul className="navbar-nav ml-auto mr-4 d-flex  justify-content-end" id="menu-right">

            <NavIcon 
                link='/search'
                icon='search'
                mobileTitle='Search'
                tooltipText="Search Games" />
            <NavIcon 
                link='/inventory'
                icon='gift'
                mobileTitle='My Inventory'
                tooltipText="Gift Inventory" />
            <NavIcon 
                link='/library'
                icon='clone'
                mobileTitle='My Games'
                tooltipText="My Games Library" />
                
            <li className="nav-item"></li>
            <li className="nav-item">
                <a href="/login" className={`nav-link`}> Log In</a>
            </li>
            <JoinFreeButton />
        </ul>
    )
}

export default RightList