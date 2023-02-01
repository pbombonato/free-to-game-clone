import React from "react";
import Logo from '../../../assets/images/logo-footer.png'

function FooterLogo(props) {
    return (
        <div className="col-md-2 col-lg-3 col-xl-3 mx-auto mt-3">
            <img style={{width: "109px"}} src={Logo} alt='FreeToGame' />
        </div>
    )
}

export default FooterLogo