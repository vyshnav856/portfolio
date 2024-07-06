import React from "react"

import LI from "./LI.jsx"
import Arrow from "./Arrow.jsx"

import "./styles/App.css"
import "./styles/Navbar.css"
import "./styles/About.css"
import "./styles/Buttons.css"
import "./styles/Certifications.css"
import "./styles/Projects.css"

export default function App() {
	return (
		<>
		<div className="navbar-container">
			<ul className="navbar-ul">
				<li><a className="navbar-link" href="#about">About</a></li>
				<li><a className="navbar-link" href="#skills">Skills</a></li>
				<li><a className="navbar-link" href="#certifications">Certifications</a></li>
				<li><a className="navbar-link" href="#projects">Projects</a></li>
				<li><a className="navbar-link" href="#achievements">Achievements</a></li>
			</ul>
		</div>
		<div id="about"></div>
		<div className="below-navbar-spacer"></div>

		<div className="responsive-container">
			<div className="about-container section-container">
				<h1 className="about-main-heading">Hello 👋 I'm Vyshnav</h1>
				<h2 className="about-sub-heading">a full-stack web developer</h2>
				<p className="about-bio-1">
					I am a passionate full-stack web-developer who loves to create fast and easy-to-use web apps. I'm currently pursuing a BTech in Computer Science at VIT Vellore.
				</p>
				<p className="about-bio-2">
					My love for web development began when I was first introduced to basic HTML and CSS during my first year of college, from where it evolved to learning and implementing different technologies to create fully-fledged web apps.
				</p>

				<div className="about-contact-container">
					<h4 className="about-contact-heading">Contact me!</h4>

					<div className="about-contact-sub-container">
						<p><span className="highlight-bold">Mail: </span>vyshnavr856@gmail.com</p>
						<p><span className="highlight-bold">Phone: </span>9744301163</p>
					</div>
				</div>
			</div>

			<div id="skills"></div>
			<div className="buttons-container section-container">
				<a className="resume-button large-button" target="_blank" href="https://drive.google.com/file/d/1VEPPnAnNLZDgbl0Pb0a13ggMUqrTcYHQ/view?usp=sharing">
					My Resume
					<Arrow className="resume-button-arrow" />
				</a>

				<a className="github-button large-button" target="_blank" href="https://github.com/vyshnav856">
					My GitHub
					<Arrow className="github-button-arrow" />
				</a>

				<a className="linkedin-button large-button" target="_blank" href="https://www.linkedin.com/in/vyshnavr856/">
					My LinkedIn
					<Arrow className="github-button-arrow" />
				</a>
			</div>

			<div className="skills-container section-container">
				<h3 className="skills-main-heading section-heading">My Skills</h3>

				<div className="skills-lines-container">
					<p className="skills-line"><span className="highlight-bold">Programming Languages: </span>C, C++, Java, Python, JavaScript, and HTML+CSS</p>
					
					<p className="skills-line"><span className="highlight-bold">Web Frameworks: </span>ReactJS, NodeJS, ExpressJS, and Flask</p>
					<div id="certifications"></div>
					<p className="skills-line"><span className="highlight-bold">Database Technologies: </span>MongoDB and SQL</p>
					<p className="skills-line"><span className="highlight-bold">Programming Tools: </span>Git, GitHub, Insomnia, AWS Management Console</p>
				</div>
			</div>

			<div className="certifications-container section-container">
				<h3 className="certifications-main-heading section-heading">My Certifications</h3>
				<div id="projects"></div>
				<a href="https://drive.google.com/file/d/1G0Ogw2fHo_wlb1WNZ2I-HyECb9GKlAI7/view?usp=drive_link" target="_blank" className="certifications-link">AWS Certified Cloud Practitioner <Arrow className="certifications-arrow" /></a>
				<a href="https://drive.google.com/file/d/1aZ45AmNdSKKDZSmjFbMcTxMEn7Ucu9vO/view?usp=drive_link" target="_blank" className="certifications-link">AWS Certified Solutions Architect - Associate <Arrow className="certifications-arrow" /></a>
			</div>
			
			<div className="projects-container section-container">
			<h3 className="projects-main-heading section-heading">My Projects</h3>
			<div className="projects-details-container">
				<div className="single-project-container">
					<h4 className="project-name">App-etite</h4>
					<a target="_blank" href="https://github.com/crocs-in-socks/App-etite" className="project-repo-link">GitHub repository <Arrow /></a>
					<p className="project-desc">
						App-etite is a web application that integrates food image recognition, recipe and calorie retrieval, food recommendation, and calorie tracking.
					</p>
					<p className="project-tech">
						<span className="highlight-bold">Technologies used: </span>
						ReactJS, MongoDB, ExpressJS, NodeJS, PyTorch, and Django
					</p>
				</div>

				<div className="single-project-container">
					<h4 className="project-name">2D FEA Software</h4>
					<a target="_blank" href="https://github.com/vyshnav856/rane-nsk-full" className="project-repo-link">GitHub repository <Arrow /></a>
					<p className="project-desc">
						This web application allows users to conduct finite element analysis on a 2D level using AI techniques
						on an uploaded STL file. Developed for the RaneNSK design-a-thon held during IANC 2024.
					</p>
					<p className="project-tech">
						<span className="highlight-bold">Technologies used: </span>
						ReactJS, AWS S3, and Flask.
					</p>
				</div>

				<div className="single-project-container">
					<h4 className="project-name">Taskmaster</h4>
					<a target="_blank" href="https://github.com/vyshnav856/taskmaster" className="project-repo-link">GitHub repository <Arrow /></a>
					<p className="project-desc">
						Taskmaster is a ticket based work allocation app that can automatically assign work based on
						developer and ticket properties.
					</p>
					<p className="project-tech">
						<span className="highlight-bold">Technologies used: </span>
						ReactJS, NodeJS, ExpressJS, and MongoDB.
					</p>
				</div>

				</div>
			</div>

			<div className="achievements-container section-container">
				<h3 className="achievements-main-heading section-heading">My Achievements</h3>
				<p className="achievement-desc">
					Achieved first prize in the RaneNSK design-a-thon held during IANC (Industry Academia Networking
					Conclave) 2024 by developing a 2D finite element analysis software.
				</p>
				<a className="achievement-link" target="_blank" href="https://drive.google.com/file/d/1ZaI3XRPBqFQ_VypYgRjBAbjF9HL4zM5M/view?usp=drive_link">
					Certificate <Arrow />
				</a>
			</div>

		</div>
		</>
	)
}