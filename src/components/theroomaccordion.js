import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	border : 2px solid #21AFD5 ;
	color : #fff;

	&:hover{
		color : #21AFD5 ;
	}
`
const Theroomaccordion = ()=>{
	return (
		<div>
			<div className="mt-5">
			<div id="accordion">
				<p className="text-white projects-header"><u>ChatApp</u></p>
		    <Button className="btn btn-md mt-2" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseTwo">
		      Know more about ChatApp
		    </Button>
			    
		    <div id="collapseFour" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
		      <div className="card bg-secondary text-white" style={{opacity:"0.8"}}>
		      	<div className="card-body">
		      		<div className="mt-2 text-center">
				      	<p>ChatApp is a chatroom website where users can join a specified chatroom and chat with friends.
				      	On joining the room or leaving a room, a notification is sent to all other active members in the chatroom.</p>
				      	<p className="text-dark"><u>Technologies used</u></p>
				      	<ol>
				      		<li>HTML & CSS & Bootstrap</li>
				      		<li>Javascript </li>
				      		<li>Node js & WebSockets -Backend</li>
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

export default Theroomaccordion;