import React from 'react';

export class WatchoutBanner extends React.Component {

	render() {
		return (
			<div id={"banner"}>
				<p>{this.props.desc}</p>
				<p>{this.props.date}</p>
				<p>{this.props.coords}</p>
			</div>
		)
	}
}