import React from 'react';
import "./yt.css"
const SongSection = () => {
  return (
    <div className="bg-cyan-900 text-white py-8 px-4">
      <div className=" video-container  max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-center mb-6">A Song Dedicated to Laxman Yadav</h2>

        {/* Embedded YouTube Video */}
        <div className="video-responsive">
          <iframe 
            className="w-full h-full" 
            src="https://www.youtube.com/embed/97pT-yzPGuE" 
            title="A Song Dedicated to Laxman Yadav"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>

        {/* Song Information */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <p className="mb-2"><strong>अल्बम:</strong> हम लक्ष्मण यादव के साथ हैं</p>
          <p className="mb-2"><strong>बोल:</strong> हम लक्ष्मण यादव के साथ हैं</p>
          <p className="mb-2"><strong>प्रकार:</strong> सामाजवादी क्रांति गीत</p>
          <p className="mb-2"><strong>चैनल:</strong> देहाती लहर</p>
          <p className="mb-2"><strong>गायक:</strong> धर्मेन्द्र सोलंकी</p>
          <p className="mb-2"><strong>गीतकार:</strong> गया कवि जी</p>
          <p className="mb-2"><strong>स्टूडियो:</strong> हरिओम स्टूडियो आजमगढ़</p>
          <p className="mb-2"><strong>एडिटर:</strong> अभिमन्यु यादव</p>
          <p className="mb-2"><strong>संगीत:</strong> धर्मेंद्र सोलंकी व साथी</p>
          <p className="mb-2"><strong>लेवल:</strong> देहाती लहर</p>
          <p><strong>आभार:</strong> समस्त भोजपुरी समाज, गुरुजन तथा मित्र गण</p>
        </div>
      </div>
    </div>
  );
};

export default SongSection;
