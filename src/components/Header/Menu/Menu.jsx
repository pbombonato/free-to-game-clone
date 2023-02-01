import React from "react"
import LeftList from "./LeftList"
import RightList from "./RightList"

function Menu(props) {
    return (
        <div className="collapse navbar-collapse d-flex justify-content-between">
            <LeftList />
            <RightList />
        </div>
    )
}

export default Menu