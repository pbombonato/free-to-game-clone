import React from "react";
import GameCard from "./GameCard";
import ReviewText from "./ReviewText";

function CommunityReview(props) {

    return (
        <div className="col-md-6">
            <div className="deep-dark py-1 pl-1 mb-3">
                <div className="row px-3 align-items-center">
                    <GameCard title={props.title} link={props.link} thumbnail={props.thumbnail} />
                    <ReviewText username={props.username} avatar={props.avatar} review={props.review} />
                </div>
            </div>
        </div>
    )
}

export default CommunityReview