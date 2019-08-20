import GoogleMapReact from "google-map-react";
import React from "react";
import { Component } from 'react';

export class SimpleMap extends Component {
//https://www.ericdiaz.dev/main_db?lat=34.0448065379685&lon=-118.2408526314814 SimpleMap.jsx:62
    constructor(props){
        super(props);
        this.state = {
            center: {
                lat: 34.0448,
                lng: -118.2408
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
        if (window_width > 1000){
            width = window_width / 2;
            height = window_height / 2;
        }
        else{
            width = (9/10) * window_width;
            height = window_height / 2;
        }

        this.setState({width: width, height: height});
    }

    getData(lat, lng){

        let local_url = "http://127.0.0.1:5000";
        let single = "/single";
        let main_db = "/main_db";
        let web_url = "https://www.ericdiaz.dev";
        let url_args = "?lat=" + lat + "&lon=" + lng;
        let single_url = web_url + single + url_args;
        let main_db_url = web_url + main_db + url_args;
        console.log(main_db_url);
        fetch(single_url).then(	function(response) {
            return response.json();
        }).then(function (re){
            console.log(re);
            this.props.update(re);
        }.bind(this));



        fetch(main_db_url).then((res) => {
            return res.json()
        }).then( (r) => {
            console.log(r);
            this.props.update_banner(r);
        })
        // this.props.update_banner(r);






        // let xhttp;
        // xhttp = new XMLHttpRequest();
        // let base_url = "https://www.ericdiaz.dev/single";
        // let req_url = base_url + "?lat=" + lat + "&lon=" + lng;
        // xhttp.onreadystatechange = () => {
        // 	if(xhttp.readyState === 4 && xhttp.status === 200) {
        // 		let resp = xhttp.responseText;
        // 		this.props.update(resp)
        // 	}
        // };
        // xhttp.open("GET", req_url, true);
        // xhttp.send();

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