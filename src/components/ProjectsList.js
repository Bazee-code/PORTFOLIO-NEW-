import React from 'react';

// local
import Screammerproject from './screammerproject';
import Telehubproject from './telehubproject';
import Beachysandsproject from './beachysandsproject';
import Theroomproject from './theroomproject';

const ProjectsList =()=>{
	return (
		<div className="mt-3">
			<Screammerproject />
			<Telehubproject />
			<Beachysandsproject />
			<Theroomproject />
		</div>
	)
};

export default ProjectsList;