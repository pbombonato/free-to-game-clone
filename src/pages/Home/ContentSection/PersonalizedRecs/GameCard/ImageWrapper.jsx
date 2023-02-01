import React from "react";

function ImageWrapper(props) {
    return (
        <div className="image-wrapper">
            <img 
                src={props.thumbnail} 
                alt={props.description} 
                style={{width: "100%", height: "auto", aspectRatio: "attr(width) / attr(height)"}}
                className="card-img-top"
                width={356}
                height={201} />
        </div>
    )
}

export default ImageWrapper