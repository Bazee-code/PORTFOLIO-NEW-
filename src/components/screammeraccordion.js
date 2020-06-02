import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	border : 2px solid #21AFD5;
	color : #fff;
	

	&:hover{
		color: #21AFD5;
	}
`

const Screammeraccordion = ()=>{
	return (
		<div >
			<div id="accordion">
			<p className="text-white projects-header"><u>SCREAMMER</u></p>
		    <Button className="btn btn-md " data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
		      Know more about Screammer
		    </Button>
			    
		    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
		      <div className="card bg-info" style={{opacity:"0.8"}}>
		      	<div className="card-body">
		      		<div className="mt-2 text-center">
				      	<p >Screammer is a social media app that has a functionality similar to twitter. It allows users to signup,login and share their posts(screams) 
				      		with other signed up users. You need to be loggedin in order to like or comment on any of the posts(screams).The user can also update their personal details
				      		such as the profile picture and their bio.The user can also delete their posts.</p>
				      	<p className="text-dark"><u>Technologies used</u></p>
				      	<ol>
				      		<li>HTML & CSS & Bootstrap</li>
				      		<li>Javascript & Reactjs </li>
				      		<li>Firebase & Nodejs- Backend</li>
				      		<li>Redux</li>
				      		<li>Styled Components</li>
				      	</ol>
		      </div>
		      	</div>
		      </div>
		    </div>
			</div>
		</div>
	)
};

export default Screammeraccordion;