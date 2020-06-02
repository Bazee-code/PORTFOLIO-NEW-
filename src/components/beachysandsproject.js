import React from 'react';

// local
import Beachysandsaccordion from './beachysandsaccordion';
import Beachysandscarousel from './beachysandscarousel';

const Beachysandsproject = ()=>{
	return (
		<div className="row">
			<div className="col-md-8">
				<Beachysandscarousel />
			</div>
			<div className="col-md-4">
				<Beachysandsaccordion />
			</div>
		</div>
	)
};

export default Beachysandsproject;