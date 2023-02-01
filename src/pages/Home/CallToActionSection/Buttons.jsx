import React from "react";
import { BlueButton, GrayButton } from '../../../components/Buttons'

function Buttons(props) {
    return (
        <p>
            <BlueButton
                link='/register'
                customClass='my-2 mr-2'
                content={<React.Fragment><strong>GET STARTED </strong><span className="small">It's free</span></React.Fragment>}
            />

            <GrayButton
                link='/games'
                content='Browse Games' />
        </p>
    )
}

export default Buttons