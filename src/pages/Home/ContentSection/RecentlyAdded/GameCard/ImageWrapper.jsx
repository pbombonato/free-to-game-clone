import React from "react";

function ImageWrapper(props) {
    return (
        <div className="col-3 align-self-center mt-n2">
            <div className="card">
                <div className="image-wrapper">
                    <img src={props.thumbnail} alt={props.title} className="card-img-top" />
                </div>
            </div>
        </div>  
    )
}

export default ImageWrapper