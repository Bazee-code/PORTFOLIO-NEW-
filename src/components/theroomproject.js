import React from 'react';

// local
import Theroomaccordion from './theroomaccordion';
import Theroomcarousel from './theroomcarousel';

const Theroomproject = ()=> {
	return (
		<div className="row">
			<div className="col-md-4">
				<Theroomaccordion />
			</div>
			<div className="col-md-8">
				<Theroomcarousel />
			</div>
		</div>
	)
};

export default Theroomproject;