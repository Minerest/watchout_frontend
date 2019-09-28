import React from "react";
import { Button } from '@material-ui/core';
import {Map, View} from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";


export class OLMap extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            center: [-118.2408, 34.0448],
            zoom: 12
        };
        this.timeout_id = null;
        this.is_maindb_loading = false;
        this.get_current_position = this.get_current_position.bind(this);
    }

    componentDidMount(){
        this.map = new Map({
            target: 'map',
            layers: [
                new TileLayer({
                    source: new OSM("Simple OSM Map")
                })
            ],
            controls: [],
            view: new View({
                projection: 'EPSG:4326',    //The library defaults to some weird X,Y coordinate system. This forces our normal Lat/Lon system.
                center: this.state.center,
                zoom: this.state.zoom
            })
        });
        this.map.on("click", (event) => {
            this.getData(event.coordinate[0], event.coordinate[1]); //But of course Lat/Lon is returned backwards when it gets to me.
        });
    }

    getData(lng, lat){

        let local_url = "http://127.0.0.1:5000";
        let single = "/single";
        let main_db = "/main_db";
        let web_url = "https://www.ericdiaz.dev";
        let url_args = "?lat=" + lat + "&lon=" + lng;
        let single_url = web_url + single + url_args;
        let main_db_url = web_url + main_db + url_args;
        fetch(single_url).then(	function(response) {
            return response.json();
        }).then(function (re){
            this.props.update(re);
        }.bind(this));

        if (!this.is_maindb_loading) {
            this.is_maindb_loading = true;
            fetch(main_db_url).then((res) => {
                return res.json()
            }).then((r) => {
                this.is_maindb_loading = false;
                this.props.update_banner(r);
            })
        }


    }

    get_current_position() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition( pos => {
                const lat = pos.coords.latitude;
                const lon = pos.coords.longitude;
                let view = this.map.getView();
                view.setCenter([lon, lat]);
            });
        }
        else {
            console.log("No geolocation");
        }
    }


    render(){
        return(
            <div>
                <Button variant="contained" color="primary" size="medium" onClick={this.get_current_position}> Get Current Position!</Button>
                <div id="map" style={{"height":"400px", "width":"400px"}}/>
            </div>
        )
    }
}



// export class SimpleMap extends Component {
//
//     constructor(props){
//         super(props);
//         this.state = {
//             center: {
//                 lat: 34.0448,
//                 lng: -118.2408
//             },
//             zoom: 11,
//             width: 0,
//             height: 0,
//             timeout_id : null,
//         };
//         this.updateSizes = this.updateSizes.bind(this);
//         this.wrapper = this.wrapper.bind(this);
//         this.get_current_position = this.get_current_position.bind(this);
//         this.is_maindb_loading = false;
//     }
//
//     componentDidMount() {
//         this.wrapper();
//         window.addEventListener("resize", this.wrapper);
//     }
//
//
//     wrapper(){
//         window.clearTimeout(this.state.timeout_id);
//         this.setState({timeout_id: window.setTimeout(this.updateSizes, 200)});
//     }
//
//     updateSizes(){
//         let window_width = window.innerWidth;
//         let window_height = window.innerHeight;
//         let width;
//         let height;
//         if (window_width > 1000){
//             width = window_width / 2;
//             height = window_height / 2;
//         }
//         else{
//             width = (9/10) * window_width;
//             height = window_height / 2;
//         }
//
//         this.setState({width: width, height: height});
//     }
//
//     _onClick = ({x, y, lat, lng, event}) => this.getData(lat,lng);
//
//     render() {
//
//         return (
//             // Important! Always set the container height explicitly
//             <div className="react_map" style={{"height": this.state.height, "width": this.state.width}}>
//                 <Button variant="contained" color="primary" size="medium" onClick={this.get_current_position}> Get Current Position!</Button>
//                 <GoogleMapReact
//                     bootstrapURLKeys={{ key: "AIzaSyBqHAyz7qbZeKCF_aKujnK0SKff8Pb0s1A" }}
//                     center={this.state.center}
//                     defaultZoom={this.state.zoom}
//                     onClick={(e) => this._onClick(e)}
//                     className="maps_container">
//                 </GoogleMapReact>
//             </div>
//         );
//     }
// }