import React from "react";
import ImageWrapper from "./ImageWrapper";
import CardBody from "./CardBody";

function GameCard(props) {
    return (
        <div className="game-card col-md-6 mt-4">
            <div className="card mb-4 grow shadow">
                <ImageWrapper
                    title={props.title}
                    thumbnail={props.thumbnail} />

                <CardBody 
                    title={props.title}
                    link={props.link} />
            </div>
        </div>
    )
}

export default GameCard