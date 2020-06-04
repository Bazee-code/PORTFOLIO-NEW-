import React from 'react';

const Beachysandscarousel = ()=>{
	return (
		<div>
			<div className="mt-3">
				<div id="carouselExampleControls3" className="carousel slide " data-ride="carousel">
			  	<div className="carousel-inner">
			    <div className="carousel-item active">
			      <img className="d-block w-100" src="./portfolio-img/beachy-sands1.png" className="img-fluid" alt="First slide" />
			    </div>
			    <div className="carousel-item">
			      <img className="d-block w-100" src="./portfolio-img/beachy-sands2.png" className="img-fluid" alt="Second slide" />
			    </div>
			    <div className="carousel-item">
			      <img className="d-block w-100" src="./portfolio-img/beachy-sands3.png" className="img-fluid"  alt="Third slide" />
			    </div>
			    <div className="carousel-item">
			      <img className="d-block w-100" src="./portfolio-img/beachy-sands4.png" className="img-fluid"  alt="Third slide" />
			    </div>
			    
			  </div>
			  <a className="carousel-control-prev"  href="#carouselExampleControls3" 
			  	data-toggle="tooltip" data-placement="left" title="Go back" role="button" data-slide="prev">
			    <span className="carousel-control-prev-icon" style={{backgroundColor:"#9D21D5"}} aria-hidden="true"></span>
			    <span className="sr-only">Previous</span>
			  </a>
			  <a className="carousel-control-next" href="#carouselExampleControls3" role="button" data-slide="next" 
			  	data-toggle="tooltip" title="View more photos" data-placement="right">
			    <span className="carousel-control-next-icon" style={{backgroundColor:"#9D21D5"}} aria-hidden="true"></span>
			    <span className="sr-only">Next</span>
			  </a>
		 		</div>
		 	</div>
		</div>
	)
};

export default Beachysandscarousel;