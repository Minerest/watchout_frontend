import React from "react";
import ReactDOM from "react-dom";
import { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './index.css';

class Thermometer extends Component {

	constructor(props){
		super(props);
		this.change_filling = this.change_filling.bind(this);
		this.state = {
			marginTop: 0,
			height: 0
		}
	}

	change_filling(){
		let danger_rating = this.props.danger_rating;
		let height_offset = 100 - danger_rating;
		let stylez = {
			marginTop: height_offset,
			height: danger_rating
		}
		this.setState(stylez);
	}

	render() {
		return (
			<div className="thermometer">
				<div style={{"height": this.state.height, "margin-top": this.state.marginTop }} className="filling"/>
			</div>
		)
	}
}

class Watchout extends Component {

	render(){
		return <h1>Watchout!</h1>
	}
}

class DataView extends Component {out

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


class SimpleMap extends Component {

	constructor(props){ 
		super(props);
		this.state = {
             center: {
              lat: 34.115784,
              lng: -117.302399
            },
            zoom: 11,
			width: 0,
			height: 0,
			f : null
		};
		this.updateSizes = this.updateSizes.bind(this);
		this.wrapper = this.wrapper.bind(this);

	}

	componentDidMount() {
		this.wrapper();
		window.addEventListener("resize", this.wrapper);

	}


	wrapper(){
		window.clearTimeout(this.f);
		this.f = window.setTimeout(this.updateSizes, 200);
	}

	updateSizes(){
		let window_width = window.innerWidth;
		let window_height = window.innerHeight;
		let width;
		let height;
		if (window_width > 480){
			width = window_width / 2;
			height = window_height / 2;
		}
		else{
			width = (9/10) * window_width;
			height = window_height / 2;
		}

		this.setState({width: width, height: height});
		console.log("am i working");
	}

    getData(lat, lng){

        let xhttp;
		xhttp = new XMLHttpRequest();
        let base_url = "https://www.ericdiaz.dev/single";
		let req_url = base_url + "?lat=" + lat + "&lon=" + lng;
		xhttp.onreadystatechange = () => {
			if(xhttp.readyState === 4 && xhttp.status === 200) {
				let resp = xhttp.responseText;
				this.props.update(resp)
			}
    	};
		xhttp.open("GET", req_url, true);
		xhttp.send();

    }

    _onClick = ({x, y, lat, lng, event}) => this.getData(lat,lng);




  render() {
  	
    return (
      // Important! Always set the container height explicitly
      <div className="react_map" style={{"height": this.state.height, "width": this.state.width}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBqHAyz7qbZeKCF_aKujnK0SKff8Pb0s1A" }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
          onClick={(e) => this._onClick(e)}
		  className="maps_container"
		>
        </GoogleMapReact>
      </div>
    );
  }
}

class Container extends Component {

	constructor(props) {
		super(props);
		this.state = {
			crime_stats: {
				assault: 0,
				murder: 0,
				theft: 0,
				robbery: 0,
				other: 0
			},
			side_div: "20%"
		};

		this.update_dataview.bind(this);

		this.state.crime_stats = {
			assault: 0,
			murder: 0,
			theft: 0,
			robbery: 0,
			other: 0
		};
		this.state.danger_rating = 0;
	}

	calc_dangerrating(){
		let danger_rating = 0;
		danger_rating += this.state.crime_stats.assault;
		danger_rating += this.state.crime_stats.murder * 20;
		danger_rating += this.state.crime_stats.theft * .5;
		danger_rating += this.state.crime_stats.robbery;
		danger_rating += this.state.crime_stats.other * .5;
		danger_rating = parseInt(danger_rating / 1000);
		this.setState.danger_rating = danger_rating;
	}

	update_dataview = crime_set => {
		let data = JSON.parse(crime_set);
		this.setState({crime_stats : data});
		this.calc_dangerrating();
	};

	render(){
		return(
			<div className="master_container">
				<div className="watchout"><Watchout /></div>
				<div className="that_div">
					<div>
						<div className="data">
							<DataView  d={this.state.crime_stats} />
						</div>
						<Thermometer danger_rating={this.state.danger_rating}/>
					</div>
				</div>
				<div className="maps_container">
					<SimpleMap update={this.update_dataview} />
					<input type="text" placeholder="Enter an address!" className="input_box"/>
				</div>
			</div>
		)
	}
}

ReactDOM.render( <Container />, document.getElementById("root"));
