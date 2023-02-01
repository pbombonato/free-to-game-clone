import React from "react";
import FreeBadge from "../../../../../components/FreeBadge";

function CardBody(props) {
    return (
        <div className="card-body">
            <FreeBadge customClass='float-right' />
            <a href={props.link} className="stretched-link no-underline">
                <h4 className="card-title text-truncate">{props.title}</h4>
            </a>
            {/* <div className="d-flex justify-content-between align-items-center"> </div> */}
        </div>
    )
}

export default CardBody