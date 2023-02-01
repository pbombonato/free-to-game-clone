import React from "react";
import CallToActionSection from "./CallToActionSection";
import ContentSection from "./ContentSection";


function Home(props) {
    return (
        <main>
            <div id="content-wrap">
                <CallToActionSection />
                <ContentSection />
            </div>
        </main>
    )
}

export default Home