import React from "react";
import { NavTopLeft, NavTopMid, NavTopRight } from "./NavBar"

export default class Header extends React.Component {
	render() {
		return (
			<div>
				<NavTopLeft class="NavTopLeft" />
				<NavTopMid class="NavTopMid" />
				<NavTopRight class="NavTopRight" />
			</div>
		);
	}
}
