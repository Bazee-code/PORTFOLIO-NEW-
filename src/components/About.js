import React from 'react';

// local
import Navbar from './Navbar';
import Header from './Header';
import Profile from './Profile';
import Accordion from './Accordion';

const About = () =>{
	return (
		<div className="about-page">
			<Header />
			<Navbar />
			<Profile />
			<Accordion />
		</div>
)
};

export default About;
