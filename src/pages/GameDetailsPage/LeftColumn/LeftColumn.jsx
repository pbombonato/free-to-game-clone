import React from "react";
import GameCard from "./GameCard";
import PlayNowButton from "./PlayNowButton";
import RateSection from "./RateSection";

function LeftColumn(props) {
    // Por que o vídeo não está funcionando? Verificar isso

    return (
        <div className="col-md-4">
            <div className="sidebar control-box">
                <GameCard id={props.id} title={props.title} />

                <div className="row">
                    <div className="col-3 col-lg-2 mr-2">
                        <span className="btn btn-dark2 mb-3">FREE</span>
                    </div>

                    <PlayNowButton title={props.title} />
                </div>

                <RateSection loginStatus={props.loginStatus}/>
                
                <span className="small text-muted ml-1">
                    <i className="fas fa-user mr-2"></i>
                    Requires 3rd-Party Account
                </span>
            </div>
        </div>
    )
}

export default LeftColumn