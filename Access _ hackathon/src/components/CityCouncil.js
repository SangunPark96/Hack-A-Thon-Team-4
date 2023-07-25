import React, { useState, useEffect } from "react";
import axios from "axios";
import CouncilorIndex from "./CouncilorIndex";
import { FaSearch } from "react-icons/fa";
import bronx from "../Images/BronxMap.png";

export default function CityCouncil() {
  const [repsList, setRepsList] = useState([]);
  const [borough, setBorough] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCouncilors, setFilteredCouncilors] = useState([]);

  useEffect(() => {
    axios
      .get(`https://data.cityofnewyork.us/resource/uvw5-9znb.json`)
      .then((res) => {
        setRepsList(res.data);
      })
      .catch((e) => {
        console.log({ error: { e } });
      });
  }, []);

  useEffect(() => {
    // Filter the councilors based on the selected borough and search term
    setFilteredCouncilors(
      repsList.filter(
        (councilor) =>
          councilor.borough === borough &&
          councilor.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [borough, searchTerm, repsList]);

  const handleChange = (event) => {
    setBorough(event.target.value);
  };

  const handleSearch = () => {
    // The search is handled automatically by the useEffect hook above
    // No need for additional logic here
  };

  return (
    <div className="container-fluid">
      <h3 className="text-center mb-5">Search for Your Council Person</h3>

      <div className="row">
        <div className="col-md-6">
          <label htmlFor="boroughs"></label>

          <select
            name="boroughs"
            className="form-select"
            id="borough"
            onChange={handleChange}
          >
            <option value="placeholder">
              Choose a Borough in New York City
            </option>
            <option value="Bronx">Bronx</option>
            <option value="Queens">Queens</option>
            <option value="Brooklyn">Brooklyn</option>
            <option value="Manhattan">Manhattan</option>
            <option value="Staten Island">Staten Island</option>
          </select>
        </div>
        <div className="col-md-6">
          <div className="search-container">
            <div className="flex-grow-1">
              <input
                type="text"
                className="form-control"
                placeholder="Search by name"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </div>
            <div className="ms-2">
              <button className="btn btn-primary" onClick={handleSearch}>
                <FaSearch />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <CouncilorIndex councilors={filteredCouncilors} borough={borough} />
        </div>
      </div>
    </div>
  );
}
