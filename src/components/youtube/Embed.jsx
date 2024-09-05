import React from 'react';
import "./yt.css"
const YouTubeEmbed = ({ videoId, title, description,bgColor='bg-cyan-900' }) => {
  return (
    <div className={`${bgColor} {...props}  text-white py-8 px-4`}>
      <div className=" video-container  max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl  font-semibold text-center mb-6">{title}</h2>

        {/* Embedded YouTube Video */}
        <div className="video-responsive">
          <iframe 
            className="w-full h-full" 
            src={`https://www.youtube.com/embed/${videoId}`}
            title="A Song Dedicated to Laxman Yadav"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>

        {/* Song Information */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <p className="mt-4 text-white text-center">{description}</p>
        </div>
      </div>
    </div>

  );
};

export default YouTubeEmbed;
