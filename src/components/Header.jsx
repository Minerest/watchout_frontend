import React from "react";
import { Component } from 'react';

export class Watchout extends Component {

    constructor(props){
        super(props);
        this.state = {
            watchout: "",
            text: "Watchout!",
            cur_indx: 0
        };
        this.animate_header = this.animate_header.bind(this);
    }

    componentDidMount() {
        let interval_id = setInterval(this.animate_header, 150);
        this.setState({interval_id: interval_id});
    }

    animate_header(){

        if (this.state.cur_indx < this.state.text.length){
            let cur_text = this.state.watchout + this.state.text[this.state.cur_indx];
            this.setState({
                watchout: cur_text,
                cur_indx: this.state.cur_indx + 1
            });
        }
        else{
            clearInterval(this.state.interval_id);
        }
    }

    render(){
        return(
            <h1>{this.state.watchout}</h1>
        )
    }
}
