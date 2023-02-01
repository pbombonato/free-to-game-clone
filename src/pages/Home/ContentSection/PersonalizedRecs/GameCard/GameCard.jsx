import React from "react";
import ImageWrapper from "./ImageWrapper";
import CardBody from "./CardBody";

function GameCard(props) {
    return (
        <div className="game-card video-card col-md-4">
            <div className="card mb-4 grow shadow">
                <ImageWrapper thumbnail={props.thumbnail} description={props.title} />

                <CardBody title={props.title} link={props.link} />
            </div>
        </div>
    )
}

export default GameCard