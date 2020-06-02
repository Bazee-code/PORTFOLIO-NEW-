import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	border : 2px solid #9D21D5;
	color : #fff;

	&:hover{
		color : #9D21D5;
	}
`
const Card = styled.div`
	background-color : #9D21D5;
	color : #fff;
`
const Beachysandsaccordion = ()=>{
	return (
		<div>
			<div className="mt-5">
			<div id="accordion">
				<p className="text-white projects-header"><u>Beachy Sands</u></p>
		    <Button className="btn btn-md mt-2" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseTwo">
		      Know more about Beachy Sands
		    </Button>
			    
		    <div id="collapseThree" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
		      <Card className="card" style={{opacity:"0.8"}}>
		      	<div className="card-body">
		      		<div className="mt-2 text-center">
				      	<p >Beachy sands is a restaurant booking site. It allows the user to book a room at the Beachy sands resort based on criteria such as 
				      	price,room size,number of people and pets.</p>
				      	<p className="text-dark"><u>Technologies used</u></p>
				      	<ol>
				      		<li>HTML & CSS & Bootstrap</li>
				      		<li>Javascript & Reactjs </li>
				      		<li>Styled Components</li>
				      	</ol>
		      </div>
		      	</div>
		      </Card>
		    </div>
			</div>
		</div>
		</div>
	)
};

export default Beachysandsaccordion;