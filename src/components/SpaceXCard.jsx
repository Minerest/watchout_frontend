import React from "react";

export function SpaceXCard (props){
    return(
        <div key={props.key}>
            <p>{props.launch.mission_name}</p>
            <img className="spacex_card" src={props.launch.links.flickr_images[0]} />
        </div>
    )
}