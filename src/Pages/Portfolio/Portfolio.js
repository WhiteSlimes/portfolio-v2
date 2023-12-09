import React from "react";
import PortfolioBlock from "./PortfolioBlock";
import { info } from "../../Info/Info";

import "./Portfolio.scss"

export default function Portfolio(){
    return(
        <div className="mainPortfolio">
            {info.portfolio.map((project, index) => (
                <PortfolioBlock key={index} image={project.image} live={project.live} source={project.source} title={project.title} techno={project.techno} desc={project.desc}/>
            ))}
        </div>
    )
}