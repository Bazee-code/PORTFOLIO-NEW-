import React from 'react';

// local
import Telehubaccordion from './telehubaccordion';
import Telehubcarousel from './telehubcarousel';

const Telehubproject = ()=>{
	return (
		<div>
			<div className="row">
				<div className="col-md-4">
					<Telehubaccordion />
				</div>
				<div className="col-md-8">
					<Telehubcarousel />
				</div>
			</div>
		</div>
	)
};

export default Telehubproject;