import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./hero.css"; // Custom styles
import intro1 from "../../assets/slides-img/intro1.png";
import quote from "../../assets/slides-img/quote.png";
import book from "../../assets/slides-img/book-en.png";
import thanks from "../../assets/slides-img/thanks.png";
const HeroCarousel = () => {
  // Slick settings for the carousel
  const settings = {
    dots: true, // Pagination dots
    infinite: true, // Infinite looping
    speed: 500, // Slide transition speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Enable autoplay
    autoplaySpeed: 4000, // Autoplay speed (3 seconds)
    arrows: true, // Show Previous/Next arrows
  };

  return (
    <Slider {...settings}>
      <div className="slide">
        <img src={intro1} alt="Slide 1" />
      </div>

      <div className="slide">
        <img src={quote} alt="Slide 1" />
      </div>
      <div className="slide">
        <img src={book} alt="Slide 2" />
        <div className="absolute bottom-4 right-8 lg:bottom-8 lg:left-40">
          <button className="bg-slate-500 text-white shadow-2xl rounded-lg p-2">
           <a href="https://amzn.in/d/fdMKGeM"
            target="_blank" 
            rel="noopener noreferrer" 
           > Buy Now</a>
           
          </button>
        </div>
      </div>
      <div className="slide">
        <img src={thanks} alt="Slide 2" />
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default HeroCarousel;
