import React from "react";

function GameBackground(props) {
    return (
        <div 
            className="gameprofile_background"
            style={{backgroundImage: `url(https://www.freetogame.com/g/${props.id}/background.jpg)`}}>
            <div className="gameprofile_gradient"></div>
        </div>
    )
}

export default GameBackground