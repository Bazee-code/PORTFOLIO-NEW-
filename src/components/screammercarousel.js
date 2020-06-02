import React from 'react';

// local
import Screammeraccordion from './screammeraccordion';

const Screammercarousel = ()=>{
	return (
		<div className="row">
			<div className="col-md-8">
				<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
		  	<div className="carousel-inner">
		    <div className="carousel-item active">
		      <img className="d-block w-100" src="./portfolio-img/screammer1.png" className="img-fluid" alt="First slide" />
		    </div>
		    <div className="carousel-item">
		      <img className="d-block w-100" src="./portfolio-img/screammer2.png" className="img-fluid" alt="Second slide" />
		    </div>
		    <div className="carousel-item">
		      <img className="d-block w-100" src="./portfolio-img/screammer3.png" className="img-fluid"  alt="Third slide" />
		    </div>
		    <div className="carousel-item">
		      <img className="d-block w-100" src="./portfolio-img/screammer4.png" className="img-fluid"  alt="Third slide" />
		    </div>
		    <div className="carousel-item">
		      <img className="d-block w-100" src="./portfolio-img/screammer5.png" className="img-fluid"  alt="Third slide" />
		    </div>
		    <div className="carousel-item">
		      <img className="d-block w-100" src="./portfolio-img/screammer6.png" className="img-fluid"  alt="Third slide" />
		    </div>
		  </div>
		  <a className="carousel-control-prev"  href="#carouselExampleControls" 
		  	data-toggle="tooltip" data-placement="left" title="Go back" role="button" data-slide="prev">
		    <span className="carousel-control-prev-icon" style={{backgroundColor:"#000"}} aria-hidden="true"></span>
		    <span className="sr-only">Previous</span>
		  </a>
		  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next" 
		  	data-toggle="tooltip" title="View more photos" data-placement="right">
		    <span className="carousel-control-next-icon" style={{backgroundColor:"#000"}} aria-hidden="true"></span>
		    <span className="sr-only">Next</span>
		  </a>
		 </div>
		</div>
		<div className="col-md-4">
			<Screammeraccordion />
		</div>
		</div>
	)
};

export default Screammercarousel;