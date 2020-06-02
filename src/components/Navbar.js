import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import styled ,{ThemeProvider} from 'styled-components';

const Nav = styled.nav`
	background-color : ${(props)=>props.theme.mode === "projects" ? "#000000":"#DBE9F4"};
	opacity : 0.5;
`
const Navbar = () => {
	const [theme,setTheme] = useState({mode :"about"});

	return (
		<ThemeProvider theme={theme}>
			<Nav className="navbar navbar-expand-sm navbar-light ">
				{/*logo*/}
				
			{/*collapsible btn*/}
			<button className="navbar-toggler" data-toggle="collapse" data-target="#navBarNav">
				<span className="navbar-toggler-icon"></span>
			</button>

			{/*links*/}
			<div className="collapse navbar-collapse" id="navBarNav">
				<ul className="navbar-nav mx-auto ">
					<Link to="/"  className="nav-link nav-item ml-2 text-secondary">Home</Link>
					<Link to="/about" className="nav-link nav-item ml-2 text-secondary" >About</Link>
					<Link to="/projects" className="nav-link nav-item text-secondary" onClick={() => setTheme({mode : "projects"}) }>Portfolio</Link>
					<Link to="/contacts" className="nav-link nav-item text-secondary">Contact Me</Link>
				</ul>
			</div>
			</Nav>
		</ThemeProvider>
	)
};

export default Navbar;