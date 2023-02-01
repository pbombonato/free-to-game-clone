import React from "react";

function ReviewText(props) {
    return (
        <div className="col-md-6 mt-3">
            <div className="truncate4 mb-2 text">
                <i className="fas fa-quote-left pr-2"></i> {props.review}
            </div>
            <img src={props.avatar} alt={`${props.username}'s avatar`} className="img-profile rounded-circle" />
            <span className="text-muted pl-2 text-truncate">By {props.username}</span>
        </div>
    )
}

export default ReviewText