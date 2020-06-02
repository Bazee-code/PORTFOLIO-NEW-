import React from 'react';
import {IoIosArrowDown} from 'react-icons/io';
import styled,{keyframes} from 'styled-components';
import {fadeInUpBig} from 'react-animations';

const ButtonStyle = styled.button`
	animation : 2s ${keyframes`${fadeInUpBig}`} ;
	background-color : #C821D5;
`
const Bar = styled.div`
	background-color : #C821D5;
`
const Card = styled.div`
	opacity : 0.6;
`
const Accordion = ()=>{
	return (
				<div className="text-center mt-3">
				<div id="accordion">

		    <div id="collapseOne" className="collapse" data-parent="#accordion">
		      <div className="row">
		      	<div className="col-md-3"></div>
		      	<div className="col-md-6">
		      	<Card className="card mt-3 border-info">
		      		<div className="card-body text-center">
		      		<div className="progress mt-2" style={{height:"25px"}}>
		      			<Bar className="progress-bar progress-bar-striped progress-bar-animated" style={{width:"90%"}}>HTML</Bar>
		      		</div>
		      		<div className="progress mt-2" style={{height:"25px"}}>
		      			<Bar className="progress-bar progress-bar-striped progress-bar-animated" style={{width:"80%"}}>CSS</Bar>
		      		</div>
		      		<div className="progress mt-2" style={{height:"25px"}}>
		      			<Bar className="progress-bar progress-bar-striped progress-bar-animated" style={{width:"80%"}}>Adobe XD</Bar>
		      		</div>
		      		<div className="progress mt-2" style={{height:"25px"}}>
		      			<Bar className="progress-bar progress-bar-striped  progress-bar-animated" style={{width:"80%"}}>Javascript / ES6</Bar>
		      		</div>
		      		<div className="progress mt-2" style={{height:"25px"}}>
		      			<Bar className="progress-bar progress-bar-striped  progress-bar-animated" style={{width:"70%"}}>React.js</Bar>
		      		</div>
		      		<div className="progress mt-2" style={{height:"25px"}}>
		      			<Bar className="progress-bar progress-bar-stripe  progress-bar-animated" style={{width:"50%"}}>Node.js</Bar>
		      		</div>
		      		<div className="progress mt-2" style={{height:"25px"}}>
		      			<Bar className="progress-bar  progress-bar-striped progress-bar-animated" style={{width: "70%"}}>MongoDB & Mongoose</Bar>
		      		</div>
		      		<div className="progress mt-2" style={{height:"25px"}}>
		      			<Bar className="progress-bar  progress-bar-striped progress-bar-animated" style={{width: "40%"}}>Redux</Bar>
		      		</div>
		      		</div>
		      	</Card>
		      	</div>
		      	<div className="col-md-3"></div>
		      </div>
		    </div>
		    <ButtonStyle className="btn btn-md mt-3 text-white" data-toggle="collapse" data-target="#collapseOne">
	          Click to view my skills <IoIosArrowDown/>  
	      </ButtonStyle>
		    </div>
	    </div>

	)
};

export default Accordion;