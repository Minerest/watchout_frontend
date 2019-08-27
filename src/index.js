import React from "react";
import ReactDOM from "react-dom";
import { Component } from 'react';
import './index.css';
import {Watchout_container} from './components/watchout_container';

class App extends Component {


	render(){
		return(<Watchout_container />)
	}
}

ReactDOM.render( <App />, document.getElementById("root"));
