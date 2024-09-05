import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

const BookInfo = ({ book }) => {
  const navigate = useNavigate();
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const goToReviews = () => {
    navigate("/latest#reviews"); // Navigate to the "/about" page
  };

  return (
    <>
   <div className="book-info-container bg-gray-100 p-6 rounded-lg shadow-md m-5">
  <h1 className="text-2xl font-bold mb-2">{book.title}</h1>
  <h2 className="text-xl font-semibold text-gray-700 mb-2">by {book.author}</h2>
  <div className="w-full book-cover mb-4 flex justify-center content-center">
    <img 
      src={book.coverImage} 
      alt={`${book.title} cover`} 
      className="w-64 h-80 object-cover rounded-md" 
    />
  </div>
  <p className="hidden md:block text-lg text-gray-700">
    {book.description}
  </p>
  <div className="block md:hidden text-lg text-gray-700"> 
    {isReadMore ? (
      <p>{book.description}</p>
    ) : (
      <p>
        {book.description.slice(0, 100)}...
        <button
          onClick={toggleReadMore}
          className="text-blue-500 hover:underline ml-2"
        >
          {isReadMore ? 'Show Less' : 'Read More'}
        </button>
      </p>
    )}
  </div> {/* Correctly closed div here */}
  <div className="book-info-extra">
    <p className="text-sm text-gray-500">Published: {book.publishDate}</p>
    <p className="text-sm text-gray-500">Genre: {book.genre}</p>
  </div>
  <a 
    href={book.purchaseLink} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="mt-6 mr-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md"
  >
    Buy Now
  </a>
  <a 
    onClick={goToReviews}
    target="_blank" 
    rel="noopener noreferrer" 
    className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded-md"
  >
    View Reviews
  </a>
</div> {/* Correctly closed the outer div */}

  </>
  );
};

export default BookInfo;

