import React from 'react';
import { motion } from "framer-motion";
import { FaHtml5, FaCss3, FaSass, FaReact } from 'react-icons/fa';
import { SiWebpack, SiJavascript } from 'react-icons/si';
import Portfolio1 from '../../images/portfolio-1.png';
import Portfolio2 from '../../images/portfolio-2.png';
import Portfolio3 from '../../images/portfolio-3.png';
import "./about.scss";


function About() {
	const workVariants = {
		visible: (idx) => ({
			opacity: 1,
			transition: {
				delay: idx * 0.6,
			}
		}),
		hidden: {opacity: 0},
	};

	const works = [
		{
			title: "Dashboard For Cargo",
			imgUrl: Portfolio1,
		},
		{
			title: "Marketplace App",
			imgUrl: Portfolio2,
		},
		{
			title: "Landing Page",
			imgUrl: Portfolio3,
		},
	]
	return (
		<section className='about'>
			<div className="container">
				<div className="about__intro">
					<motion.h1
					initial={{
						y: -1000,
						opacity: 0
					}}
					animate={{
						y: 0,
						opacity: 1,
					}}
					transition={{
						duration: 2,
					}}
					>Hello I am Hero Coder</motion.h1>
					<p>Frontend React Developer</p>
				</div>

				<div className="about__skills">
					<h3>My Skills</h3>
					<ul>
						<li>
							<FaHtml5/>
							Html
						</li>
						<li>
							<FaCss3/>
							Css
						</li>
						<li>
							<FaSass/>
							Sass
						</li>
						<li>
							<SiJavascript/>
							Javascript
						</li>
						<li>
							<SiWebpack/>
							Webpack
						</li>
						<li>
							<FaReact/>
							React
						</li>
					</ul>
				</div>

				<div className="about__portfolio">
					<h3>Latest Works</h3>
					<ul>
						{works.map((work, idx)=> (
						<motion.li
							variants={workVariants}
							initial={"hidden"}
							animate={"visible"}
							key={idx}
							custom={idx}
						>
							<img src={work.imgUrl} alt="" />
							<h4>{work.title}</h4>
						</motion.li>
						))}
						{/* <li>
							<img src={Portfolio2} alt="" />
							<h4>Marketplace App</h4>
						</li>
						<li>
							<img src={Portfolio3} alt="" />
							<h4>Landing Page</h4>
						</li> */}
					</ul>
				</div>
			</div>
		</section>
		
	)
}

export default About