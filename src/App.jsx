import React from "react"

import Lorem from "./Lorem.jsx"
import Navbar from "./Navbar.jsx"
import About from "./About.jsx"
import Arrow from "./Arrow.jsx"

import "./styles/App.css"

export default function App() {
	return (
		<div className="responsive-container">
			<div id="about"></div>
			<Navbar />
			<div className="spacer"></div>
			<About />

			<a className="resume-button" target="_blank" href="#">
				My Resume
				<Arrow className="arrow-svg-resume" />
			</a>
		</div>
	)
}