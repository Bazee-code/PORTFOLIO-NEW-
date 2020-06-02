import React from 'react';
import styled,{keyframes} from 'styled-components';
import {rollIn,fadeInRightBig} from 'react-animations';

const Roll = styled.div`
	animation : 3s ${keyframes`${rollIn}`};
`

const Fade = styled.div`
	animation : 3s ${keyframes`${fadeInRightBig}`};
`

const Profile =()=> {
	return (
		<div className="row">
			<Roll className="col-md-6 text-center mt-5 ">
				
					<img src="./me.png" className="img-fluid rounded-circle" 
					style={{height:"300px",width:"300px"}}/>
		
			</Roll>
			<Fade className="col-md-6 mt-5 ">
				<p className="text-dark text-center summary-info ">Eugene Obare is a self-taught full-stack developer currently 
				enrolled at the University of Nairobi studying Electrical and 
				Electronic Engineering. I'm also an intern at <a href="https://ponea.com" target="_blank">Ponea</a>. I'm passionate about creating digital solutions and memorable user experiences.</p>
			</Fade>
		</div>
	)
};

export default Profile;