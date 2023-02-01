import React from "react";
import ImageWrapper from "./ImageWrapper";
import FreeBadge from "../../../../../components/FreeBadge";

function GameCard(props) {
    return (
        <div className="game-card video-card">
            <div className="card mb-4 grow shadow">
                <ImageWrapper 
                    title={props.title}
                    thumbnail={props.thumbnail} />

                <FreeBadge 
                    style={{position: 'absolute',bottom: '.5rem',right:'1rem'}}
                    customClass="shadow float-right" />

                <a href={props.link} className="stretched-link no-underline"></a>
            </div>
        </div>
    )
}

export default GameCard