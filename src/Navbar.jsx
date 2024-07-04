import React from "react"

import "./styles/Navbar.css"

export default function Navbar() {
	return (
		<div className="navbar-container">
			<ul className="navbar-ul">
				<li><a className="navbar-link" href="#about">About</a></li>
				<li><a className="navbar-link" href="#skills">Skills</a></li>
				<li><a className="navbar-link" href="#projects">Projects</a></li>
				<li><a className="navbar-link" href="#contact">Contact</a></li>
			</ul>
		</div>
	)
}