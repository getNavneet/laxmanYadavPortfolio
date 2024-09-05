import React  from "react";
import "./yt.css"

const YouTubeVideoComponent = () => {

  return (
    <div className="video-container">
      <h1 className="text-center text-3xl p-4 underline">Latest videos from Dr. Laxman Yadav</h1>
      <h2 className="mb-5 text-xl text-gray-600">प्रोफ़ेसर की डायरी राष्ट्र निर्माताओं के खंडित सपनों का दस्तावेज है || Professor Roop Rekha Verma
      </h2>
      <div className="video-responsive">
        <iframe
          src={`https://www.youtube.com/embed/MKTB9Ek6nw8`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeVideoComponent;
