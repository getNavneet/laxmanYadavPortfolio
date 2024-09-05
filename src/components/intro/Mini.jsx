import React from "react";
import { useNavigate } from "react-router-dom";

const MiniBio = () => {
  const navigate = useNavigate();


  const goToAbout = () => {
    navigate("/about"); // Navigate to the "/about" page
  };

  return (
    <div className="bg-white rounded-lg shadow-2xl p-6">
      <div className="max-w-5xl mx-auto">
        <div className=" mx-auto p-1 prose">
          <h1 className="text-3xl mb-4 font-bold">Dr. Laxman Yadav </h1>
          <p>
            An Expelled Ad-hoc Assistant Professor of University of Delhi.
            Passion for writing, reading and speaking on social, cultural and
            political issues. As punishment, my DU job was taken away. Its story
            has been recorded in the best seller book 'Professor's Diary'.
            Influenced by the ideology of Social Justice. A dreamer of a world
            of love based on equality and justice.
          </p>
          <p onClick={goToAbout} className="text-blue-600 hover:underline">
            Explore More About Laxman Yadav
          </p>
          <div/>
        </div>
        
      </div>
    </div>
  );
};

export default MiniBio;
