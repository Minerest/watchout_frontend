import React from "react";
import ReactDOM from "react-dom";
import { Component } from 'react';
import './index.css';
import { WatchoutContainer } from './components/watchout_container';
import { RezContainer } from './components/RezContainer';
import { Button} from "@material-ui/core";
import {Header} from "./components/Header";

class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			watchout_showing: false,
			that_rez_showing: false
		}
		this.start_the_show = this.start_the_show.bind(this);
		this.but_that_rez_tho = this.but_that_rez_tho.bind(this);
		this.back_to_main = this.back_to_main.bind(this);
	}

	start_the_show(){
		this.setState({
				watchout_showing:true,
				that_rez_showing: false
		});
	}

	but_that_rez_tho(){
		this.setState({
			watchout_showing: false,
			that_rez_showing: true
		});
	}

	back_to_main(){
		this.setState({
			watchout_showing: false,
			that_rez_showing: false
		})
	}

	render(){
		if (this.state.watchout_showing) {
			return (<WatchoutContainer back_to_main={this.back_to_main}/>);
		}
		else if(this.state.that_rez_showing){
			return(<RezContainer back_to_main={this.back_to_main} start_the_show={this.start_the_show}/>);
		}
		else{
			return (
				<div className="master_container">
					<Header text="Hi! I'm Eric. Welcome!" />
					<div className="main_buttons">
						<span className="home_button"><Button variant="contained" color="primary" size="medium" onClick={this.start_the_show}>The Watchout! App</Button></span>
						<Button variant="contained" color="primary" size="medium" onClick={this.but_that_rez_tho}>But how is this made?</Button>
					</div>
				</div>
			)
		}
	}
}

ReactDOM.render( <App />, document.getElementById("root"));
