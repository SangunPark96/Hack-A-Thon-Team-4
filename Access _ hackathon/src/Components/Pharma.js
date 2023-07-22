import { useState, useEffect } from "react"
import axios from "axios";

export default function Pharma(){

    const [locations, setLocations] = useState([])
    const [userData, setUserData] = useState({
        zipcode:"",
        type:""
    })

    useEffect(() => {
        axios.get(`https://data.cityofnewyork.us/resource/edk2-vkjh.json`).then((res) => {
            setLocations(res.data)
        }).catch((e) => {
            console.log({ error: {e}})
        })
    }, []);

    const handleTypeSelect = (event) => {
        setUserData({...userData, type: event.target.value});
      };

    const handleTextChange = (event) => {
        setUserData({ ...userData, [event.target.id]: event.target.value });
      };
    
    const handleSubmit = (event) => {
        event.preventDefault();
      };


    return (
        <div>
            <form onSubmit={handleSubmit}>

                    Type:

                <select id="type-select" value={userData.type} onChange={handleTypeSelect}>
                    <option value="">--Please choose an option--</option>
                    <option value="Pharma">PHARMACEUTICALS</option>
                    <option value="Syringe">SYRINGE/SHARPS</option>
                </select>

                <label htmlFor="zipcode">Zipcode:
                <input
                  id="zipcode"
                  type="number"
                  value={userData.zipcode}
                  placeholder="Your Nearest Zipcode"
                  onChange={handleTextChange}
                />
                </label>
                <br/>        


                    <input type="submit" />
                
              </form>
        </div>
    )
}