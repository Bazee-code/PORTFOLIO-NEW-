import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	border : 2px solid #CBD521;
	color : #fff;

	&:hover{
		color:#CBD521; 
	} 
`
const Telehubaccordion = ()=>{
	return (
		<div>
			<div className="mt-5">
			<div id="accordion">
				<p className="text-white projects-header"><u>TELEHUB</u></p>
		    <Button className="btn btn-md mt-2" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
		      Know more about Telehub
		    </Button>
			    
		    <div id="collapseTwo" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
		      <div className="card bg-warning " style={{opacity:"0.9"}}>
		      	<div className="card-body">
		      		<div className="mt-2 text-center">
				      	<p >Telehub is a mobile-phone e-commerce site. It allows the user to view a phone's details,add phone to cart,
				      	remove phone to cart and calculates the totals accordingly.</p>
				      	<p className="text-dark"><u>Technologies used</u></p>
				      	<ol>
				      		<li>HTML & CSS & Bootstrap</li>
				      		<li>Javascript & Reactjs </li>
				      		<li>Styled Components</li>
				      	</ol>
		      </div>
		      	</div>
		      </div>
		    </div>
			</div>
		</div>
		</div>
	)
};

export default Telehubaccordion;