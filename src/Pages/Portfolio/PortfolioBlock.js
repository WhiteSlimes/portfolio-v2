import React from "react";
import IconLink from "./IconLink";

function PortfolioBlock(props){
    const {image, live, source, title} = props
    return(
        <div className="projet">
            <img src={image} alt={'mockup'}/>
            <h1>{title}</h1>
            <div className="portfolio">
                <div className="firstIcon">
                    <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'}/>
                </div>
                <div className="secondIcon">
                    <IconLink link={source} title={'Source Code'} icon={'fa fa-code'}/>
                </div>
            </div>
        </div>
    )
}

export default PortfolioBlock