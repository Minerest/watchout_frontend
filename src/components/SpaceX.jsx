import React from "react";
import  ApolloClient  from 'apollo-boost';
import { gql } from 'apollo-boost';
import {SpaceXCard} from './SpaceXCard';
import { ApolloProvider, useQuery } from "@apollo/react-hooks";

const GET_DATA = gql`{
                launchesPast(limit: 10) {
                    mission_name
                    details
                    links {
                        video_link
                        flickr_images
                    }
                }
            }`

export function SpaceX (props) {

    const {data, loading, error} = useQuery(GET_DATA)
    if (loading) {
        return <p>Loading</p>
    } else {
        return (
            <div  className="spacex_container">
                { data.launchesPast.map( launch => <SpaceXCard launch={ launch } key={ launch.mission_name }/> ) }
            </div>
        )
    }
}