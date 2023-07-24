import React from "react";
import PetitionStatistics from "../components/PetitionStatistics";
import PopularPetitions from "../components/PopularPetition";

const Home = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <div className="text-center">
        <PetitionStatistics />
        <PopularPetitions />
      </div>
    </div>
  );
};

export default Home;
