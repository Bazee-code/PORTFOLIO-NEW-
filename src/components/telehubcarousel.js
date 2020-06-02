import React from 'react';

const Telehubcarousel =()=>{
	return (
			<div className="mt-3">
				<div id="carouselExampleControls2" className="carousel slide carousel-fade" data-ride="carousel">
			  	<div className="carousel-inner">
			    <div className="carousel-item active">
			      <img className="d-block w-100" src="./portfolio-img/telehub1.png" className="img-fluid" alt="First slide" />
			    </div>
			    <div className="carousel-item">
			      <img className="d-block w-100" src="./portfolio-img/telehub2.png" className="img-fluid" alt="Second slide" />
			    </div>
			    <div className="carousel-item">
			      <img className="d-block w-100" src="./portfolio-img/telehub3.png" className="img-fluid"  alt="Third slide" />
			    </div>
			    <div className="carousel-item">
			      <img className="d-block w-100" src="./portfolio-img/telehub4.png" className="img-fluid"  alt="Third slide" />
			    </div>
			    
			  </div>
			  <a className="carousel-control-prev"  href="#carouselExampleControls2" 
			  	data-toggle="tooltip" data-placement="left" title="Go back" role="button" data-slide="prev">
			    <span className="carousel-control-prev-icon" style={{backgroundColor:"#000"}} aria-hidden="true"></span>
			    <span className="sr-only">Previous</span>
			  </a>
			  <a className="carousel-control-next" href="#carouselExampleControls2" role="button" data-slide="next" 
			  	data-toggle="tooltip" title="View more photos" data-placement="right">
			    <span className="carousel-control-next-icon" style={{backgroundColor:"#000"}} aria-hidden="true"></span>
			    <span className="sr-only">Next</span>
			  </a>
		 		</div>
		 	</div>
	)
};

export default Telehubcarousel;