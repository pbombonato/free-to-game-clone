import React from "react";
import FooterColumn from "./FooterColumn";
import FooterLogo from "./FooterLogo";

function LinksSection(props) {
    const firstColumn = [['/about','About Us'], ['/api-doc','API'], ['/contact','Contact Us']]
    const secondColumn = [['/faq','Help/FAQ'],['support','Support & Bugs'], ['/feedback','Feature Request']]
    const thirdColumn = [['/privacy-policy', 'Privacy Policy'], ['/cookies-policy','Cookies Policy'],['/terms-of-use','Terms of Use']]

    return (
        <div className="row text-center text-md-left mt-3 pb-3">

            <FooterColumn 
                columnLinks={firstColumn}
                extraElement={<p> </p>} />
            
            <FooterColumn columnLinks={secondColumn} />

            <FooterColumn 
                customClass='col-md-4 col-lg-3 col-xl-3 mx-auto mt-3'
                columnLinks={thirdColumn} />

            <FooterLogo />

        </div>
    )
}

export default LinksSection