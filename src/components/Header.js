import React from 'react';
import styled,{keyframes} from 'styled-components';
import {fadeInDownBig} from 'react-animations';

const HeaderStyle = styled.div`
	animation : 3s ${keyframes`${fadeInDownBig}`};
`

const Header = ()=>{
	return (
		<div>
		<div className="row">
			<div className="col-sm-4 col-md-4"></div>
				<HeaderStyle className="col-sm-4 col-md-4 text-center">
					<img src="./mylogo.png" className="img-fluid" 
				style={{height:"130px",width:"130px"}}/>							
				</HeaderStyle>
			<div className="col-sm-4 col-md-4"></div>
		</div>	
		</div>
	)
};

export default Header;