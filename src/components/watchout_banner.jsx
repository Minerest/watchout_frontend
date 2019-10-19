import React from 'react';

export function WatchoutBanner(props) {
		return (
			<div id={"banner"}>
				<p>{props.desc}</p>
				<p>{props.date}</p>
				<p>{props.coords}</p>
			</div>
		)
}