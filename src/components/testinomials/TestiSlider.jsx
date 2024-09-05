import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testi.css";
import { useNavigate } from "react-router-dom";

const testimonials = [
  {
    name: "Amet vickram",
    role: "23 August 2024",
    message:
      "Such type of book comes once in a life..tells the reality of the academic institution..just superb and I have no words how to describe this book..i can just say go for it..👌👌👌👌",
    photo: "link_to_photo.jpg",
  },
  {
    name: "harpreet KJ",
    role: "16 June 2024",
    message: `किताब हर उस व्यक्ति को पढ़नी चाहिए जो समाज और उसकी व्यवस्था के बारे में उत्सुक है। हर उस नागरिक के लिए जो समाज में असमानता के कारण को समझना जरूरी समझते हैं।`,
    photo: "link_to_photo3.jpg",
  },
  {
    name: "Mukesh Kumar Yadav",
    role: "27 August 2024",
    message: `I will recommend all Yadavs community must read this book to know the reality of our educational society and their corrupted so learned educationist.`,

    photo: "link_to_photo2.jpg",
  },
  {
    name: "dinbandhu Ram Mandavi",
    role: "13 July 2024",
    message: `Everybody can under stood the everyday incidents occurs in Indian institution by this book. These are the facts.`,
    photo: "link_to_photo3.jpg",
  },
 
 
  {
    name: "	S S CHATTERJEE",
    role: "16 March 2024",
    message: `At some places like his advice to Mohit and response of Mohit's mother( (page 68/69)& response of Rajesh( band darwaje) brought tearstearsj
`,
    photo: "link_to_photo3.jpg",
  },
  {
    name: "Dilip dhangarh",
    role: " 9 February 2024",
    message: `Tnnks sir, your experience shared with all students

I am lots enjoy this book
Thnk u sir, this book many thanks.
`,
    photo: "link_to_photo3.jpg",
  },
];

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };
  const navigate = useNavigate();

  const goToReviews = () => {
    navigate("/latest#reviews"); // Navigate to the "/about" page
  };
  return (
    <div className="w-10/12 m-auto mb-3" >
    <h2 className="text-3xl font-bold text-center p-4">What People Say</h2>
    <Slider {...settings}>
          
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="testimonial-card h-60  p-6 rounded-lg shadow-2xl text-center"
        >
          <p className="text-gray-700 italic mb-4">"{testimonial.message}"</p>
          <h3 className="text-lg font-semibold">{testimonial.name}</h3>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      ))}
    </Slider>
    <button className="text-blue-500 p-3" onClick={goToReviews} >
view all reviews
    </button>
    </div>
    
  );
};

export default TestimonialCarousel;
