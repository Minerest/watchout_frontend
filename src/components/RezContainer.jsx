import React from "react";
import { Component } from 'react';


export class RezContainer extends Component {
    // The master container for the Resume Page.

    constructor(props){
        super(props);

    }

    render(){
        return(
            <div id='resume_container'>
                <h1>Hi, I'm Eric.</h1>
                <button onClick={this.props.back_to_main}>Lolwut?</button>
                <button onClick={this.props.start_the_show}>Oh, is that what that was?</button>
            </div>
        );
    }
}