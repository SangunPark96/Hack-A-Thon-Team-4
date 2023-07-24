import React from "react";
import PopularPetitions from "../components/PopularPetition";

const Home = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <div className="text-center">
        <PopularPetitions />
      </div>
    </div>
  );
};

export default Home;
