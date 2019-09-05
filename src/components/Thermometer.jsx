import React from "react";
import { Component } from 'react';
import { Spring, config } from 'react-spring/renderprops';


export class Thermometer extends Component {

    constructor(props){
        super(props);
        this.change_filling = this.change_filling.bind(this);
        this.state = {
            top: 155,
            height: 0,
            prev_height: 0,
            prev_top: 0,
            danger_rating: 0
        }
    }

    change_filling(dr){
        if (isNaN(dr)){
            return;
        }
        let height_offset = 1/100 * (100 - dr); // convert to percentage
        height_offset *= 155  // relate it to height of thermometer
        let top_style = 155 - height_offset // remainder
        let stylez = {
            top: height_offset,
            height: top_style
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
        if (this.state.prev_top === this.state.top && this.state.prev_height === this.state.height){
            return (
                <div className="thermometer">
                    <div style={{"height": this.state.height, "top": this.state.top}} />
                </div>
            )
        }
        return (
            <Spring from={{top: this.state.prev_top, height: this.state.prev_height}}
                    to={{top: this.state.top, height: this.state.height}}
                    config={config.molasses}>
                {props => (
                <div className="thermometer">
                    <div className="filling" style={{"height": props.height + "px", "top": props.top + "px"}}/>
                    <div className="thermobulb" />
                </div>
                )}
            </Spring>

        )
    }
}