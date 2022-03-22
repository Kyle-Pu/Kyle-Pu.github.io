import React from 'react'

function ProjectFrame(props) {
    // props.links is an object containing all links of the specific project
    let linkTitles = [];
    let linkPaths = [];
    for(const site in props.links){
        linkTitles.push(site);
        linkPaths.push(props.links[site]);
    }

    return (
        <figure>
            <br/>
            <img className="Thumbnail" src={props.imgPath} alt={props.alt}/>
            <figcaption><b>{props.title}</b> {props.caption} {props.award !== "" && <i>{props.award}</i>}</figcaption>
            <div className="LinksContainer">
                {linkTitles.map((title, index) => {
                    let sep = "|";
                    if(index === linkPaths.length - 1){
                        sep = ""; // Don't put a separator after the last link
                    }
                    return <a href={linkPaths[index]} target="_blank"> {title} {sep}</a>
                })}
            </div>
            <br/>
        </figure>
    );
}

export default ProjectFrame;
