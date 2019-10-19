import React from "react";
import { Component } from 'react';
import { Spring } from 'react-spring/renderprops';

export class DataView extends Component {

    render(){
        return (
            <div className="data_items">
                <div className="left_items">
                    {/*TODO: There has to be a better way than doing this.*/}
                    <Spring from={{number:this.props.last_d.assault}} to={{number:this.props.d.assault}}>
                        {props => <p>Assault: {props.number.toFixed(0)}</p> }
                    </Spring>
                    <Spring from={{number:this.props.last_d.murder}} to={{number:this.props.d.murder}}>
                        {props => <p>Murder: {props.number.toFixed(0)}</p> }
                    </Spring>
                    <Spring from={{number:this.props.last_d.theft}} to={{number:this.props.d.theft}}>
                        {props => <p>Theft: {props.number.toFixed(0)}</p> }
                    </Spring>
                </div>
                <div className="right_items">
                    <Spring from={{number:this.props.last_d.robbery}} to={{number:this.props.d.robbery}}>
                        {props => <p>robbery: {props.number.toFixed(0)}</p> }
                    </Spring>
                    <Spring from={{number:this.props.last_d.other}} to={{number:this.props.d.other}}>
                        {props => <p>Other: {props.number.toFixed(0)}</p> }
                    </Spring>
                </div>
            </div>
        );
    }
}