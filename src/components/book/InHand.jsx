import React from 'react';

const BookGallery = ({ images,title }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden shadow-lg rounded-lg">
            <img
              src={image}
              alt={`Laxman Yadav's book ${index + 1}`}
              className="w-full h-56 object-cover transform transition duration-500 hover:scale-110"
              loading="lazy" // Enables lazy loading for the image
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookGallery;
