import React from "react";
import AboutImage from "./AboutImage";
import AboutText from "./AboutText";

function AboutSection(props) {
    return (
        <section className="mb-5 text-center text-lg-left dark-grey-text shadow bg-about">
            <div className="row align-items-center">
                <AboutImage />
                <AboutText />
            </div>
        </section>
    )
}

export default AboutSection