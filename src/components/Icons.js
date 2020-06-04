import React from 'react';
import {FaLinkedin,FaInstagramSquare,FaGithub,FaArrowCircleRight} from 'react-icons/fa';
import styled from 'styled-components';

const A = styled.a`
	color : #D5D221;
	margin-left : 20px;
	

	&:hover{
		background-color :#fff;
		color : #000;
	}
`

const Icons = () =>{
	return (
		<div>
			<p>Have any questions? Want to work together? You can reach me through my socials below.</p>
			<A href="https://www.linkedin.com/in/eugene-obare-aa82b4160/" target="_blank" data-toggle="tooltip" 
			title="Check my LinkedIn" data-placement="bottom"><FaLinkedin /></A>
			<span><A href="https://github.com/Bazee-code" target="_blank" data-toggle="tooltip" 
			data-placement="right" title="Check my Github"><FaGithub /></A></span>
			<span><A href="instagram.com" target="_blank" data-toggle="tooltip" 
			data-placement="top" title="My instagram"><FaInstagramSquare /></A></span>
			<p>You can also send me an email here</p>
				<FaArrowCircleRight style={{color:"#D5D221"}} />
		</div>
	)
};

export default Icons;