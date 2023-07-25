import React from "react";
import "../Styles/Councilor.css";

export default function Councilor({ reps }) {
  return (
    <div className="col-md-6">
      <div className="RepMap">
        <h3>{reps.name}</h3>
        <br />
        <div className="row">
          <div className="col-6">
            <h5>District Number : </h5>
          </div>
          <div className="col-6">
            <p style={{ fontSize: "20px" }}>{reps.district}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h5>Political Party : </h5>
          </div>
          <div className="col-6">
            <p style={{ fontSize: "20px" }}>{reps.political_party}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
