import React from "react";
import { Component } from 'react';
import {Trail} from 'react-spring/renderprops'

export class Watchout extends Component {

    constructor(props){
        super(props);
        this.state = {
            watchout: "",
            text: "Watchout!",
            cur_indx: 0
        };
        this.items = [
            {item :"W", key:0},
            {item:"a", key:1},
            {item:"t", key:2},
            {item:"c", key:3},
            {item:"h", key:4},
            {item:"o", key:5},
            {item:"u", key:6},
            {item:"t", key:7},
            {item:"!", key:8},
        ]

    }

    // componentDidMount() {
    //     let interval_id = setInterval(this.animate_header, 150);
    //     this.setState({interval_id: interval_id});
    // }


    render(){

        return(
            <h1>
                <Trail items={this.items}
                       keys={item => item.key}
                       from={{opacity:0}}
                       to={{opacity:1}}
                >
                    {item => props => <span style={props}> {item.item} </span>}
                </Trail>
            </h1>
        );
    }
}
