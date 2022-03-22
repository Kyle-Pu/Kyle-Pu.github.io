import React from 'react'
import "./Projects.css"
import ProjectFrame from "./ProjectFrame"

function Projects() {
    return (
        <div className="Container">
            <ProjectFrame title="GreenRide" imgPath={require("../../imgs/greenride.png")} caption="Google Maps, but with a CO2 emissions calculator that takes the route, car, and number of passengers to show how much CO2 each person is emitting to inspire more environmentally conscious traveling." award="Won Best in Sustainability at UCLA ACM's Hack on the Hill 2022" links={{'Website': 'https://jakegreenbergbell.github.io/greenride/', 'GitHub': 'https://github.com/jakegreenbergbell/greenride', 'DevPost': 'https://devpost.com/software/greenride'}}/>

            <ProjectFrame title="Selector Safari" imgPath={require("../../imgs/selector-safari.png")} caption="As part of TeachLA's Dev Team, I help build a game to teach kids around LA about CSS selectors." links={{'Website': 'https://selector-safari.uclaacm.com/level/1', 'GitHub': 'https://github.com/uclaacm/selector-safari', "UCLA ACM's TeachLA": "https://teachla.uclaacm.com/"}}/>

            <ProjectFrame title="Nutrition Dashboard" imgPath={require("../../imgs/nutrition.png")} caption="An interactive visualization dashboard of a selection of foods and their nutritional contents (sourced from the United States Department of Agriculture (USDA) Food Data Central resource)." award="Developed at the NIH's Summer Internship Program's Virtual Codeathon 2021" links={{'Website': 'https://share.streamlit.io/tantar/uncovering-the-nutritional-landscape-of-food/main/UNLF.py', 'GitHub': 'https://github.com/STRIDES-Codes/Uncovering-the-Nutritional-Landscape-of-Food'}}/>
        </div>
    );
}

export default Projects;
