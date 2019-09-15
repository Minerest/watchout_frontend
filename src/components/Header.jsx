import React from "react";
import { Component } from 'react';
import {Trail, config} from 'react-spring/renderprops'

export class Header extends Component {

    constructor(props){
        super(props);
        this.items = [];
        for (let i = 0; i < props.text.length; i++){
            this.items.push({
                item: props.text[i],
                key: i
            });
        }
    }

    render(){

        return(
            <h1>
                <strong>
                <Trail items={this.items}
                       keys={item => item.key}
                       from={{opacity:0}}
                       to={{opacity:1}}
                       config={config.wobbly}
                >
                    {item => props => <span style={props}> {item.item} </span>}
                </Trail>
                </strong>
            </h1>
        );
    }
}
