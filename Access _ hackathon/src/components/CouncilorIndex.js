import React, { useState } from "react";
import Councilor from "./Councilor";
import bronx from "../Images/BronxMap.png";
import manhattan from "../Images/ManhattanMap.png";
import queens from "../Images/QueensMap.png";
import brooklyn from "../Images/BrooklynMap.png";
import staten from "../Images/StatenMap.png";
import "../Styles/Councilor.css";

export default function Councilors({ councilors, borough }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCouncilors = councilors.filter((councilor) => {
    return (
      councilor.borough === borough &&
      councilor.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div>
      <div className="row justify-content-center">
        {/* <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div> */}
      </div>
      <div id="map-box">
        {borough === "Bronx" ? (
          <img
            src={bronx}
            alt="BronxMap"
            className="mapbox"
            style={{ height: "500px", width: "600px" }}
          />
        ) : null}
        {borough === "Manhattan" ? (
          <img
            src={manhattan}
            alt="ManhattanMap"
            className="mapbox"
            style={{ height: "500px", width: "600px" }}
          />
        ) : null}
        {borough === "Queens" ? (
          <img
            src={queens}
            alt="queensMap"
            className="mapbox"
            style={{ height: "500px", width: "600px" }}
          />
        ) : null}
        {borough === "Brooklyn" ? (
          <img
            src={brooklyn}
            alt="brooklynMap"
            className="mapbox"
            style={{ height: "500px", width: "600px" }}
          />
        ) : null}
        {borough === "Staten Island" ? (
          <img
            src={staten}
            alt="statenMap"
            className="mapbox"
            style={{ height: "500px", width: "600px" }}
          />
        ) : null}
      </div>
      <br />
      <div>
        <div>
          {filteredCouncilors.map((userList) => {
            return <Councilor reps={userList} />;
          })}
        </div>
      </div>
    </div>
  );
}
