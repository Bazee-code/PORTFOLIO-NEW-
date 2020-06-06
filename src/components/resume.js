import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	background-color : #D5D221;

	&:hover{
		background-color : #000;
	}
`
const A = styled.a`
	color : #fff;
`
const Resume = () =>{
	return (
		<div className="text-center mt-3">
		<Button className="btn">
			<A href="./resume/resume.pdf" target="_blank" download="eugene-resume.pdf">Download my resume</A>
		</Button>
		</div>
	)
};

export default Resume;
