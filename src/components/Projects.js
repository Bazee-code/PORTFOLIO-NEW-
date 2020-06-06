import React from 'react';

// class
import {Navbar} from './';
import ProjectsHeader from './ProjectsHeader';
import ProjectsList from './ProjectsList';

class Projects extends React.Component {
	render() {
		return (
			<div className="text-center projects-page">
				alert("Refresh to activate slider");
				<ProjectsHeader />
				<Navbar />
				<ProjectsList />
			</div>
		)
	}
}

export default Projects;