import React from "react";
import SocialIcon from "./SocialIcon";

function Social(props) {
    return (
        <div className="col-md-5 col-lg-4 ml-lg-0">
            <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                    <SocialIcon 
                        title="GitHub"
                        link="https://github.com/pbombonato"/>
                    
                    <SocialIcon
                        title="LinkedIn"
                        link="https://www.linkedin.com/in/pablobombonato/" />
                </ul>
            </div>
        </div>
    )
}

export default Social