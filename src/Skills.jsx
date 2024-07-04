import React from "react"
import Arrow from "./Arrow.jsx"

export default function Skills() {
	return (
		<div className="skills-container">
			<h5 className="section-heading skills-section-heading">My Skills and Certifications</h5>
			<p className="skills-sub-section-heading">Cloud Certifications</p>
			<a className="aws-link" target="_blank" href="#">AWS Certified Cloud Practitioner <Arrow className="aws-link-arrow" /></a>
			<a className="aws-link" target="_blank" href="#">AWS Certified Solutions Architect<Arrow className="aws-link-arrow" /></a>

			<p className="skills-sub-section-heading">Programming Languages</p>
			<p>C, C++, Java, Python, JavaScript, and HTML+CSS</p>

			<p className="skills-sub-section-heading">Web Frameworks</p>
			<p>ReactJS, NodeJS, ExpressJS, and Flask</p>

			<p className="skills-sub-section-heading">Database Technologies</p>
			<p>MongoDB and SQL</p>

		</div>
	)
}