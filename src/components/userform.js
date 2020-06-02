import React from 'react';
import styled,{keyframes} from 'styled-components';
import {fadeInUpBig,bounce} from 'react-animations';

// local
import Icons from './Icons'; 

const FormStyle = styled.div`
	background-color : #D5D221;
	opacity : 0.8;
`
const Div = styled.div`
	animation : 3s ${keyframes`${fadeInUpBig}`};
`
const Info = styled.div`
	animation : 3s ${keyframes`${bounce}`} infinite;
`
class Userform extends React.Component{
	render(){
	return (
		<div className="row ">
			<Info className="col-md-5 contacts-header text-center mt-5">
				<Icons />
			</Info>
			<Div className=" col-md-7">
				<FormStyle className="card mt-5 border-warning mr-2">
					<div className="card-body">
						<form>
							<label >Name</label>
							<input type="text" className="form-control mb-2" placeholder="Your name"/>
							<label>Email</label>
							<input type="email" className="form-control mb-2" placeholder="Your email"/>
							<label>Message</label>
							<textarea className="form-control" placeholder="How was your experience? Let me know"></textarea>
						</form>
						<div className="text-center mt-3">
							<button className="btn btn-md btn-dark btn-outline-warning">SUBMIT</button>
						</div>
						</div>
				</FormStyle>
			</Div>
		</div>
	)
}
};

export default Userform;