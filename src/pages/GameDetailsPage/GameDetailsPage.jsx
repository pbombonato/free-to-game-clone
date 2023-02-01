import React from "react";
import SavedNotification from "./SavedNotification";
import GameBackground from "./GameBackground";
import LeftColumn from "./LeftColumn"
import RightColumn from "./RightColumn";

function GameDetailsPage(props) {
    const gameInfo = {
        id: props.id,
        title: 'Genshin Impact'
    }

    return (
        <React.Fragment>
            <SavedNotification />
            <main>
                <div className="container py-4 video-page">
                    <GameBackground id={props.id} />
                    <div className="row">
                        <LeftColumn {...gameInfo} loginStatus={props.loginStatus} />
                        <RightColumn />
                    </div>
                </div>
            </main>
        </React.Fragment>
    )
}

export default GameDetailsPage