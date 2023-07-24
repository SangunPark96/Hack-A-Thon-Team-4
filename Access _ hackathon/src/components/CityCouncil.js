import React, { useState, useEffect } from "react"
import axios from "axios";
import CouncilorIndex from "./CouncilorIndex";


export default function CityCouncil() {

    const [ repsList, setRepsList] = useState([])
    const [ borough, setBorough ] = useState("")

    useEffect(() => {
        axios.get(`https://data.cityofnewyork.us/resource/uvw5-9znb.json`).then((res) => {
            setRepsList(res.data)
        }).catch((e) => {
            console.log({ error: {e}})
        })
    }, []);

    const handleChange = (event) => {
        setBorough(event.target.value);
      };
    

    return (
        <div class="container-fluid">
            <label for="boroughs"><strong>Select your borough:</strong></label>

                <select name="boroughs" class="form-control" id="borough" onChange={handleChange}>
                    <option value="placeholder">Choose a Borough in New York City</option>
                    <option value="Bronx">Bronx</option>
                    <option value="Queens">Queens</option>
                    <option value="Brooklyn">Brooklyn</option>
                    <option value="Manhattan">Manhattan</option>
                    <option value="Staten Island">Staten Island</option>
                </select>   
            <div>
                
                    <CouncilorIndex councilors={repsList} borough={borough} />
                
            </div>
        </div>
    )
}