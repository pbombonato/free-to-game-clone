import React from 'react'
import Buttons from './Buttons'

function CallToActionSection(props) {
    return (
        <section className="jumbotron text-center">
            <div className="container mb-n2">
                <h1 className="jumbotron-heading">
                    Discover the best
                    <span className='ftg-blue'> free-to-play </span>
                    games!
                </h1>
                <p className="lead text-muted">
                    Track what you've played and search for what to play next! Plus get free premium loot!
                </p>
                
                <Buttons />
            </div>
        </section>
    )
}

export default CallToActionSection