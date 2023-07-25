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
    <div className="row mt-4">
      <div className="col-md-6">
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
      </div>

      <div className="col-md-6">
        <div className="row">
          {filteredCouncilors.map((userList) => (
            <div className="col-md-12" key={userList.name}>
              <Councilor reps={userList} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
