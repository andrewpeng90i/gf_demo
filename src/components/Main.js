import React from "react";

export default class Main extends React.Component {
	render() {

		console.log(this.props.match.params);

		return (
			<div class="main-container">
			</div>
		);
	}
}