import React from "react";
import ImageWrapper from "./ImageWrapper";
import TextWrapper from "./TextWrapper";
import PlatformIcon from "./PlatformIcon";
import FreeBadge from "../../../../../components/FreeBadge";

function GameCard(props) {
    return (
        <div className="game-card card grow mb-3 shadow h-md-250 video-card">
            <div className="card-body">
                <div className="row">
                    <ImageWrapper
                        thumbnail={props.thumbnail}
                        title={props.title}
                        displayLoader={props.displayLoader} />

                    <TextWrapper 
                        title={props.title} 
                        description={props.description}
                        genre={props.genre}
                        link={props.link} />

                    <PlatformIcon platform={props.platform} />

                    <div className="col-1 justify-content-center text-center align-self-center">
                        <FreeBadge customClass="mb-2" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameCard