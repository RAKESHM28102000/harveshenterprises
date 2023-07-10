import React from 'react';
import './Testimonialss.scss';
import { AppWrap } from '../../wrapper';


function Testimonialss() {
  return (
    <div className='testimonial' id='News & Events'>
     <div id="myCarousel" className="carousel slide mb-6 app__testimonial-item app__flex" data-bs-ride="carousel" data-bs-theme="light">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className="active" aria-current="true"></button>
    </div>
    <div className="carousel-inner app__testimonial-inner">
      <div className="carousel-item">
        <div className="container">
            <h1>Group Vision:</h1>
            <p className="opacity-75">To grow and diversify Harvesh Enterprises Group into a nationally recognised, reputed brand, which is synonymous with professionalism and customer centricity.</p>
            <p><a className="btn btn-lg btn-primary" href="#Home">Sign up today</a></p>
        </div>
      </div>
      <div className="carousel-item">
        <div className="container">
            <h1>Company Vision:</h1>
            <p className="opacity-75">To establish 'Harvesh Enterprises' as a high quality, professional, innovative and customer centric brand in the Real Estate Industry</p>
            <p><a className="btn btn-lg btn-primary" href="#About">Sign up today</a></p>
        </div>
      </div>
      <div className="carousel-item active">
        <div className="container">
            <h1>Company Mission:</h1>
            <p className="opacity-75">To build and deliver high quality environmentally sustainable life spaces and create value and opportunity for all stakeholders and ecosystem partners.</p>
            <p><a className="btn btn-lg btn-primary" href="#Contact">Sign up today</a></p>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
    </div>
  )
}

 
export default Testimonialss