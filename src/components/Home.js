import React from 'react';
import {Link} from 'react-router-dom';
import styled,{keyframes} from 'styled-components';
import {flip,bounce} from 'react-animations';

const FlipAnimation = styled.div`
	animation : 3s ${keyframes`${flip}`};
	font-size : 25px;
`
const Bounce = styled.div`
		animation : 2s ${keyframes`${bounce}`} infinite;
`
const Home =()=> {
	return (
		<React.Fragment>
			<div className="video-background">
				<div className="video-wrap">
					<div id="video">
						<video autoPlay={true} loop={true} muted={true} playsInline={true}>
							<source src="./background.mp4" type="video/mp4"/>
						</video>
					</div>
				</div>
			</div>
			<div className="video-content text-center">
				<FlipAnimation>
					<p>Hello stranger .</p>
					<p className="m-4">I'm <span className="text-info">Eugene Obare</span> .</p>
					<p >I'm a <span className="text-info">fullstack developer</span> from Nairobi,Kenya .</p>
				</FlipAnimation>
				<Bounce>
					<Link to="/about">
						<button className="btn btn-md btn-dark btn-outline-info mt-5">
						<span className="text-warning">KNOW MORE ABOUT ME</span></button>
				</Link>
				</Bounce>
				<div className="text-center text-white mt-5">Made using React.js</div>
			</div>
		</React.Fragment>
	)
};

export default Home;