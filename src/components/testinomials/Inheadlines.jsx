import React from 'react';
import h1 from "../../assets/readers/headline1.jpg"

const Headlines = () => {
  const images = [
    // Add your image URLs here
   h1
    // Add the rest of the images
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 "> "प्रोफेसर की डेयरी" In headlines </h2>
      <div className="lg:w-1/3 w-3/3 mx-auto">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden shadow-lg rounded-lg">
            <img
              src={image}
              alt={`Laxman Yadav's book ${index + 1}`}
              className="w-full  object-cover transform transition duration-500 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Headlines;
