import React from "react";

function PlayNowButton(props) {
    return (
        <div className="col">
            <a 
                type='button' 
                name='playnow'
                className="btn btn-ftg-blue btn-block"
                href={`https://www.freetogame.com/open/${props.title.replace(/[^\w\s]/gi, '').toLowerCase().replace(/ /g,'-')}`}
                rel="nofollow noreferrer noopener"
                target='_blank'>
                <strong>PLAY NOW </strong>
                <i className="fas fa-sign-out-alt"></i>
            </a>
        </div>
    )
}

export default PlayNowButton