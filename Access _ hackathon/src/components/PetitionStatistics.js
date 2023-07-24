import React from "react";

const PetitionStatistics = () => {
  return (
    <div className="container mt-4">
      <div className="row text-center">
        <div className="col-md-6 mb-4">
          <h2>845</h2>
          <p className="text-secondary">
            petitions got a response from the Government
          </p>
        </div>
        <div className="col-md-6 mb-4">
          <h2>174</h2>
          <p className="text-secondary">
            petitions were debated in the House of Commons
          </p>
        </div>
      </div>
    </div>
  );
};

export default PetitionStatistics;
