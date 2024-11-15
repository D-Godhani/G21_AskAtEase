import React from "react";
import Post from "./mainpagepost"; 
import SpacesToFollow from "./mainpagaright";
import myphoto from "./Assets/myphoto.jpg";
import TCS from "./Assets/download.png";
import eyeopen from "./Assets/eye-open.png";
import friedick from '../Components/Assets/friedick.jpeg';
import CR7 from '../Components/Assets/cr7.jpg';
import Sidebar from "../Components/mainleftpart";

// Import your other assets here

const MainComponent = () => {
  return (
    <div className="flex justify-between w-full space-x-6 bg-white p-10">
      {/* Left Section (20%) */}
      <div className="w-1/5 bg-white p-10 rounded-2xl">
      <Sidebar/>
      </div>

      {/* Center Section (50%) */}
      <div className="w-1/2 bg-gradient-to-b from-[#F0D9C4] to-[#FF9797] p-10 rounded-2xl">
        {/* User Input Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-4 mb-6">
          <div className="flex items-center space-x-4">
            <img src={myphoto} alt="User Name" className="h-12 w-12 rounded-full" />
            <h3 className="font-semibold">JIMIT MEHTA</h3>
          </div>
          <div>
            <p className="text-xl font-semibold mt-4">Ask Anything!</p>
            <textarea className="w-full mt-4 p-4 border border-gray-300 rounded-lg" rows="4" placeholder="Type your question or link here..."></textarea>
            <button className="mt-4 bg-button text-white py-2 px-4 rounded-lg hover:bg-button">Submit Question</button>
          </div>
        </div>

        {/* Display Posts */}
        <div className="space-y-6">
          <Post
            profileImg={myphoto}
            name="JIMIT"
            date="14th Nov, 2024"
            question="What's your salary in TCS?"
            description="Looking for insights on salary ranges at TCS..."
            postImg={TCS}
          />
          <Post
            profileImg={eyeopen}
            name="Alex"
            date="14th Nov, 2024"
            question="What would you guys want to have in video tutorial"
          />
          <Post
            profileImg={friedick}
            name="Football_Fan"
            date="14th Nov, 2024"
            question="Who is the TOP Scorer of All Time?"
            postImg={CR7}
          />
        </div>
      </div>

      {/* Right Section (30%) */}
      <div className="w-3/10 bg-white p-10 rounded-2xl">
        <SpacesToFollow />
      </div>
    </div>
  );
};

export default MainComponent;