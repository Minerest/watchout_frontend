import React from 'react';
import { Button} from "@material-ui/core";


export function CVContainer(props){
	return (
		<div id="cv_body">
			<div id="cv_header">
				<Button variant="contained" color="primary" size="medium" onClick={props.back_to_main}>HOME</Button>
				<h1>Eric Diaz</h1>
				<h2>Aspiring Engineer</h2>
				<div id="cv_summary">
					<p>Aspiring Engineer with three years of experience writing C++, Python, Java, and Javascript. Wrote software
						that impacts business operations by automating tasks, creating graphs and charts from data previously
						unavailable, and building tools to help analyze the operation at large. Currently studying computer science at CSUSB
						with an eye for business, productivity, and automation.</p>
					<p>Experience with ReactJS, React-Native, Python, Java, C++, MySQL, PostgreSQL, GraphQL, SQLAlchemy </p>
				</div>
			</div>
			<div id="cv_container">
				<div className="cv_project">
					<h2>Watchout App</h2>
					<p>A responsive ReactJS application built with a Python-MySQL Backend. Uses current location and clicking
					on a map to query the database for crime statistics. The crime statistics are from .gov sources. A live
					demo is available on this site.</p>
				</div>
				<div className="cv_project">
					<h2>Automated Email Bot Built With Excel and Visual Basic</h2>
					<p>A tool that uses the Internet Explorer API to open a browser and web-scrape an internal website for
					statistics on daily truck departure deadlines and how many items are currently missing from those trucks.
					If the amount of missing items is over a threshold, emails will be sent to the outbound operations team
					to immediately rectify the situation. This tool has reduced the amount of late trucks leading
					to real-world savings and increased customer satisfaction.</p>
				</div>
				<div className="cv_project">
					<h2>Pallet Tracker App</h2>
					<p>Website built to support Internet Explorer that utilizes a barcode scanner to interact with the site.
					The tool is used to track items from the warehouse picker all the way to the shipping dock. It is used to
					increase the efficiency of the operation.
					</p>
					<p>The tool has the ability to generate barcodes for names and
					barcodes to group orders in an easily printable format. The easy to use interface allows the user to quickly
					generate a group of orders to a barcode. A 2-scan process ties the batch of orders to an individual picker.
					From there, the pickers scan a barcode at a "drop station" placed throughout the warehouse to let the
					shipping team what items where dropped, where, and when.</p>
				</div>
				<div className="cv_project">
					<h2>SpaceX Information Gatherer</h2>
					<p>Uses ReactJS and GraphQL to query data from <a href="api.spacex.land">api.spacex.land</a>. The data
					is then formatted neatly using Flexbox to make it responsive. The GraphQL query is called by the
					ReactJS frontend. The OnClick event cycles through different images relating to a specific image launch.
					Only 10 results are loaded at a time, there is a button to page through the next set of items.</p>
				</div>
			</div>
		</div>

	)
}