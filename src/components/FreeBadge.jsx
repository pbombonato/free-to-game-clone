import React from "react";

function FreeBadge(props) {
    return (
        <span style={{...props.style}} className={`badge badge-ftg py-2 px-2 ${props.customClass}`}>FREE</span>
    )
}

export default FreeBadge