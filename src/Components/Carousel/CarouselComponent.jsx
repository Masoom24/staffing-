import React from "react";
import { Carousel } from "antd";
import carousel1 from "../../assets/carousel1.png";
import carousel2 from "../../assets/carousel2.png";
import carousel3 from "../../assets/carousel3.png";
import "./CarouselComponent.css";

const CarouselComponent = () => {
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    autoplay: true, 
    autoplaySpeed: 3000, 
    pauseOnHover: true, 
    swipeToSlide: true, 
    effect: "scrollx", 
  };

  return (
    <div className="carousel-container">
      <Carousel {...settings}>
        <div className="carousel-item" style={{display:"flex",}}>
          <img src={carousel1} alt="carousel1" />
          <div className="carousel-text">
            <h1>Find Your Dream Job</h1>
            <p>Step by step instructions to create a job search website on your own.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={carousel2} alt="carousel2" />
          <div className="carousel-text">
            <h1>Opportunities Near You</h1>
            <p>Discover opportunities in your area with a simple search process.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={carousel3} alt="carousel3" />
          <div className="carousel-text">
            <h1>Post Jobs</h1>
            <p>Empower your business by posting jobs to reach potential candidates.</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
