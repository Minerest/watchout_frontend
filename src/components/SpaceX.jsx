import React from "react";
import { gql } from 'apollo-boost';
import {SpaceXCard} from './SpaceXCard';
import { ApolloProvider, useQuery } from "@apollo/react-hooks";
import {DropdownMenu} from "./DropdownMenu";

export function SpaceX (props) {

    const skills_used = ["Graph QL", "ReactJS", "HTML", "CSS", "SpaceX API"];

    const GET_DATA = gql`{
                launchesPast(limit: 10, offset: ${props.offset * 10}) {
                    mission_name
                    details
                    links {
                        video_link
                        flickr_images
                    }
                }
            }`
    const {data, loading, error} = useQuery(GET_DATA)
    if (loading) {
        return <p>Loading</p>
    } else {
        return (

                <div  className="spacex_container">
                    <DropdownMenu items={skills_used} />
                    { data.launchesPast.map( launch => <SpaceXCard launch={ launch } key={ launch.mission_name }/> ) }
                </div>

        )
    }
}