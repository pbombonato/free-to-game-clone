import React from "react";
import { BlueButton, GrayButton } from "../../../../components/Buttons";

function AboutText(props) {
    return (
        <div className="col-md-7 mb-4 mb-md-0 px-5 pb-3">
            <h2 className="mt-4 h3">More Fun and More Rewarding!</h2>
            <p className="text-muted text">
                We are FreeToGame, a new gaming platform that brings all the best Free-to-Play Multiplayer Games and MMO Games into one place while rewarding gamers with free premium loot and exlusive perks. Plus maintain your own games library, track what you've played and search for what to play next!
            </p>
            <BlueButton
                link='/register'
                customClass='btn-md ml-0 mr-2'
                content={<strong>JOIN NOW</strong>} />

            <GrayButton
                link='/about'
                content='Learn More' />
        </div>
    )
}

export default AboutText