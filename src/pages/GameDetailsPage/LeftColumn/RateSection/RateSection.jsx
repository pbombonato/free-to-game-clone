import React from "react";

function RateSection(props) {
    const rateCount = {
        like: 113,

    }

    function handleClick(loginStatus) {
        if (loginStatus) {
            
        }
        else { alert('You must be signed in to perform this action') }
    }

    return (
        <div className="rate-section btn-group btn-block mb-3 text-center shadow-sm rounded">
            <a 
                className="likeButton col-3 py-2 btn-dark2"
                style={{borderBottomLeftRadius: '5px', borderTopLeftRadius:'5px'}}
                onClick={() => handleClick(props.loginStatus)}>
                <div className="text-success">
                    <i className="far fa-smile fa-lg text-success"></i>
                </div>
                <div className="count mb-n2 text-muted">{rateCount.like}</div>
                <span className="title small">LIKE</span>
            </a>

            {/* Continuar a partir do botão Meh */}
        </div>
    )
}

export default RateSection