import React from "react";
import Card from "./Card";
import Hero from "./Hero";

const Home = () => {

    return (
      <>
      <Hero />
      <div className="bg-[#F3F5F5] p-5 pb-20 font-poppins">
      <div className="container mx-auto mt-6 mb-5 bg-white p-4 rounded-lg">
          <h1 className="text-xl font-bold text-[#FF8F00]">LATEST GAMES!</h1>
        </div>
        <Card/>
      </div>
      </>
    );
  };

  export default Home