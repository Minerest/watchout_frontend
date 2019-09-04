import React from "react";
import { Component } from 'react';
import { Spring } from 'react-spring/renderprops';


export class Thermometer extends Component {

    constructor(props){
        super(props);
        this.change_filling = this.change_filling.bind(this);
        this.state = {
            top: 0,
            height: 0,
            prev_height: 0,
            prev_top: 0,
            danger_rating: 0
        }
    }

    change_filling(dr){
        let danger_rating = dr;
        let height_offset = 100 - danger_rating;
        let stylez = {
            top: height_offset + "%",
            height: danger_rating + "%"
        };

        this.setState({
            prev_height: this.state.height,
            prev_top: this.state.top,
            top: stylez.top,
            height: stylez.height,
            danger_rating: dr
        });
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.state.danger_rating !== nextProps.danger_rating) {
            this.change_filling(nextProps.danger_rating);
            return true;
        }
        return false;
    }


    render() {
        return (
            <div className="thermometer">
                <div style={{"height": this.state.height, "top": this.state.top }} className="filling"/>
                <div className="thermobulb" />
            </div>
        )
    }
}