import React from "react";

function TextWrapper(props) {
    return (
        <div className="col-7 col-sm-6 col-lg-7 align-self-center justify-content-center position-static">
            <a href={props.link} className="stretched-link no-underline">
                <h4 className="card-title text-truncate mt-n2 mb-1">{props.title}</h4>
            </a>

            <div className="text-truncate text-muted mb-1">{props.description}</div>

            <span className="badge badge-secondary text-dark mr-2">{props.genre}</span>
        </div>
    )
}

export default TextWrapper