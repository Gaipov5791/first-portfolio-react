import { useRef, useEffect } from 'react'
import {Link} from "react-router-dom";
import { init } from 'ityped';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Photo from "../../images/bakyt.jpg";
import { motion } from "framer-motion";
import "./home.scss";

function Home() {
	const animatedTxtRef = useRef();
	
	useEffect(() => {
		init(animatedTxtRef.current,{showCursor: true, strings: ['Frontend React Developer'], backDelay: 1500, backSpeed: 60,})
	}, [])
	return (
		<section className='home'>
			<div className="container home__container">
				<div className="home__left">
					<motion.h1 className="home__title" 
							initial={{
								x: -1000,
								opacity: 0,
							}}
							animate={{
								x: 0,
								opacity: 1,
							}}
							transition={{
								duration: 2,
							}}
					>Hero Coder</motion.h1>
					<p className="home__subtitle">
						<span ref={animatedTxtRef}></span>
					</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia ratione eius officia quasi. Quis repellendus quasi eum rerum perspiciatis eaque corrupti! Sed a odit voluptatum asperiores quibusdam consequuntur vero?</p>
					<ul className="home__menu">
						<li className="home__item">
							<a href="https://fb.com" className="home__link" target="_blank" rel="noopener noreferrer">
								<FaFacebook className='home__icon'/>
								</a>
						</li>
							<li className="home__item">
							<a href="https://github.com" className="home__link" target="_blank" rel="noopener noreferrer">
								<FaGithub className='home__icon'/>
							</a>
						</li>
							<li className="home__item">
							<a href="https://linkedin.com" className="home__link" target="_blank" rel="noopener noreferrer">
								<FaLinkedin className='home__icon'/>
							</a>
						</li>
					</ul>
					<Link to="/contacts" className='home__cta'>
						Hire Me
					</Link>
				</div>
				<div className="home__right">
					<img src={Photo} alt="Hero Coder" />
				</div>
			</div>
		</section>
	)
}

export default Home;