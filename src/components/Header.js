import React from "react";
import NavTopRight, { NavTopLeft, NavTopMid } from "./NavBar"
import "./Header.css";

export default class Header extends React.Component {
	render() {
		return (
			<div class="header-row">
				<div class="header-left header-row span7">
					<NavTopLeft class="header-nav-left" />
				</div>
				<div class="header-mid header-row span2">
					<NavTopMid class="header-nav-mid" />
				</div>
				<div class="header-right header-row span7">
					<NavTopRight class="header-nav-right"/>
				</div>
			</div>
		);
	}
}
