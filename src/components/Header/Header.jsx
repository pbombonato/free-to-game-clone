import React from "react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import Menu from "./Menu";

function Header(props) {
    return (
        <nav
            className={`navbar navbar-expand-lg 
                navbar-dark bg-dark fixed-top shadow-sm`}
            id="mainNav" >

            <div className="container px-0">
                <Logo />
                <MobileMenu />
                <Menu />
            </div>
        </nav>
    )
}

export default Header
