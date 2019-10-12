import React from "react";
import  ApolloClient  from 'apollo-boost';
import { gql } from 'apollo-boost';

import { ApolloProvider, useQuery } from "@apollo/react-hooks";

const GET_DATA = gql`{
                launchesPast(limit: 10) {
                    mission_name
                    launch_date_local
                    launch_site {
                        site_name_long
                    }
                    links {
                        video_link
                        flickr_images
                    }
                }
            }`

export function SpaceX (props) {

    const { data, loading, error } = useQuery(GET_DATA)
    if (loading){
        return <p>Loading</p>
    }
    else {
        return (
            <div onClick={props.back_to_main}>
                {data.launchesPast.map(launch => (
                    <div key={launch.id}> {launch.mission_name} </div>
                ))}
            </div>
        )
    }

    // componentDidMount() {
    //     this.client.query({
    //         query: gql`{
    //             launchesPast(limit: 10) {
    //                 mission_name
    //                 launch_date_local
    //                 launch_site {
    //                     site_name_long
    //                 }
    //                 links {
    //                     video_link
    //                     flickr_images
    //                 }
    //             }
    //         }`
    //     }).then(result => {
    //             this.setState({
    //                 data: result.data
    //             });
    //             console.log(this.state.data)
    //         }
    //
    //     );
    // }
    //
    // render() {
    //     if (loading) {
    //         return (<div onClick={this.props.back_to_main} className="master_container">
    //                     <p>Loading</p>
    //                 </div>)
    //     } else {
    //         console.log(data);
    //         return (
    //             <div>
    //                 {data.launchesPast[0].mission_name}
    //             </div>
    //         )
    //     }
    // }
}