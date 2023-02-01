import React from "react";
import Logo from '../../../../assets/images/ftg-img.jpg'

function AboutImage(props) {
    return (
        <div className="col-md-5 mb-4 mb-md-0 py-4 pl-md-5 text-center">
            <div className="view overlay z-depth-1-half text-center">
                <img src={Logo} alt="FreeToGame" className="img-fluid" />
                <a href="#">
                    <div className="mask rgba-white-light"></div>
                </a>
            </div>
        </div>
    )
}

export default AboutImage