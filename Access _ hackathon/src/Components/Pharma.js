import { useState, useEffect } from "react"
import axios from "axios";

export default function Pharama(){

    const [locations, setLocations] = useState([])

    useEffect(() => {
        axios.get(`https://data.cityofnewyork.us/resource/edk2-vkjh.json`).then((res) => {
            setLocations(res.data)
        }).catch((e) => {
            console.log({ error: {e}})
        })
    }, []);


    console.log(locations)

    return (
        <>
        </>
    )
}