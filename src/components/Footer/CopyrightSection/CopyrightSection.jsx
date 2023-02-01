import React from "react";
import Social from "./Social";

function CopyrightSection(props) {
    return (
        <div className="row d-flex align-items-center">

            <div className="col-md-7 col-lg-8">
                <p className="text-center text-md-left small">
                    This website is a clone developed by 
                    <a href='https://github.com/pbombonato'> Pablo Bombonato </a> 
                    for studying purposes. Click 
                    <a href='https://www.freetogame.com/'> here </a>
                    to take a look at the original one.
                </p>
            </div>

            <Social />

        </div>
    )
}

export default CopyrightSection