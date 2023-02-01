import React from 'react'
import LinksSection from './LinksSection'
import CopyrightSection from './CopyrightSection'

function Footer(props) {
    return (
        <footer className="page-footer font-small deep-dark pt-3">
            <div className="container text-center text-md-left">
                <LinksSection />
                <hr />
                <CopyrightSection />
            </div>
        </footer>
    )
}

export default Footer