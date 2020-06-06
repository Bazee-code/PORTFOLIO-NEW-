import React from 'react';
import styled,{keyframes} from 'styled-components';
import {fadeInUpBig,bounce} from 'react-animations';
import axios from 'axios';

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
	// constructor(props){
	// 	super(props);
	// 		this.state ={
	// 			name : '',
	// 			email : '',
	// 			message : ''
	// 		};
	// }
	
	handleSubmit(e){
		e.preventDefault();

		const name = document.getElementById('name').value;
		const email = document.getElementById('email').value;
		const message = document.getElementById('message').value;

		// request
		axios.post("http://localhost:3002/send",{
				name : name,
				email : email,
				message : message
		}).then((res)=>{
			if(res.data.msg === 'success'){
				alert("Message sent successfully");
				this.resetForm();
				// console.log(res);
			}
			else if(res.data.msg === 'fail'){
				alert("Message failed to send");
			}
		}).catch((e)=>{
			console.log(e);
		})

	};

	resetForm(){
		document.getElementById('contact-form').reset();
	};

	render(){
		// const {name,email,message} = this.state;
		return (
			<div className="row ">
				<Info className="col-md-5 contacts-header text-center mt-5">
					<Icons />
				</Info>
				<Div className=" col-md-7">
					<FormStyle className="card mt-5 border-warning mr-2">
						<div className="card-body">
							<form method="POST" onSubmit={this.handleSubmit.bind(this)} id="contact-form">
								<label htmlFor="name">Name</label>
								<input type="text" id="name"className="form-control mb-2" placeholder="Your name"/>
								<label htmlFor="email">Email</label>
								<input type="email" id="email" className="form-control mb-2" placeholder="Your email"/>
								<label htmlFor="message">Message</label>
								<textarea className="form-control" id="message" placeholder="How was your experience? Let me know"></textarea>
								<div className="text-center mt-2">
								<button type="submit" className="btn btn-md btn-dark btn-outline-warning">SUBMIT</button>
								</div>
							</form>
							</div>
					</FormStyle>
				</Div>
			</div>
		)
}
};

export default Userform;