import React from "react";

function ImageWrapper(props) {
    return (
        <div className="image-wrapper">
            <img 
                src={props.thumbnail} 
                alt={props.title} 
                className="card-widget-top"
                width={356}
                height={201} />          
        </div>
    )
}

export default ImageWrapper