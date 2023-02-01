import React from "react";

function ImageWrapper(props) {
    return (
        <div className="image-wrapper">
            <img src={props.thumbnail} alt={props.title} className="card-img-top" />
        </div>
    )
}

export default ImageWrapper