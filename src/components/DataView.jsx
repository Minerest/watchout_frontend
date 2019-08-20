import React from "react";
import { Component } from 'react';

export class DataView extends Component {

    render(){
        return (
            <div className="data_items">
                <div className="left_items">
                    <p>Assault: {this.props.d.assault}</p>
                    <p>Murder: {this.props.d.murder}</p>
                    <p>Theft: {this.props.d.theft}</p>
                </div>
                <div className="right_items">
                    <p>Robbery: {this.props.d.robbery}</p>
                    <p>Other: {this.props.d.other}</p>
                </div>
            </div>
        );
    }
}