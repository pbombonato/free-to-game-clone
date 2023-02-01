import React from "react";
import FooterLink from "./FooterLink";

function FooterColumn(props) {
    const footerLinks = []
    
    if(props.columnLinks) {
        for (let link of props.columnLinks) {
            footerLinks.push(<FooterLink link={link[0]} title={link[1]} />)
        }
    }
    
    return (
        <React.Fragment>
            <div 
                className={props.customClass 
                    ? props.customClass 
                    : 'col-md-3 col-lg-2 col-xl-2 mx-auto mt-3'}>

                {footerLinks}
                
                {props.extraElements ? props.extraElements : ''}
            </div>
            <hr className="w-100 clearfix d-md-none" />
        </React.Fragment>
        
    )
}

export default FooterColumn