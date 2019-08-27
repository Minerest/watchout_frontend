import React from "react";
import ReactDOM from "react-dom";
import { Component } from 'react';
import './index.css';
import {WatchoutContainer} from './components/watchout_container';



class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			showing: false
		}
		this.start_the_show = this.start_the_show.bind(this);
	}

	start_the_show(){
		this.setState({showing:true});
	}

	render(){
		if (this.state.showing) {
			return (<WatchoutContainer/>)
		}
		else{
			return (
				<div>
					<h1>Hi! Welcome to my app</h1>
					<button onClick={this.start_the_show}>Show me the money</button>
				</div>
			)
		}
	}
}

ReactDOM.render( <App />, document.getElementById("root"));
