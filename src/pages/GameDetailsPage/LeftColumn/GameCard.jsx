import React from "react";

function GameCard(props) {
    return (
        <div className="card shadow mb-3 rounded">
            <img 
                src={`https://www.freetogame.com/g/${props.id}/thumbnail.jpg`}
                alt={props.title} 
                className="img2 card-img-top progressive replace"
                width={331}
                height={201} />
            
            <video className="featuredvideo" loop preload="none" muted>
                <source type="video/webm" src={`https://www.freetogame.com/g/${props.id}/videoplayback.webm`} />
            </video>

        </div>
    )
}

export default GameCard