import React, { useState, useEffect } from "react"
import axios from "axios";
import Councilors from "./Councilors";


export default function CityCouncil() {

    const [ repsList, setRepsList] = useState([])
    let userList = [];

    useEffect(() => {
        axios.get(`https://data.cityofnewyork.us/resource/uvw5-9znb.json`).then((res) => {
            setRepsList(res.data)
        }).catch((e) => {
            console.log({ error: {e}})
        })
    }, []);


    return (
        <div>
            {repsList.map((repsList, index) => {
                    return <Councilors key={index} councilors={repsList} index={index}/>;
                })}
        </div>
    )
}