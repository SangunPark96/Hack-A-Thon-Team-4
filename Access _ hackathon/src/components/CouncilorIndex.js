import Councilor from "./Councilor"
import bronx from "../Images/BronxMap.png"
import manhattan from "../Images/ManhattanMap.png"
import queens from "../Images/QueensMap.png"
import brooklyn from "../Images/BrooklynMap.png"
import staten from "../Images/StatenMap.png"
import "./Councilor.css"



export default function Councilors({councilors, borough}) {

    const userList = []

    
  

    for(let i = 0; i < councilors.length; i++){
        if (councilors[i].borough === borough){
            userList.push(councilors[i])
        }
    }

    console.log(userList)
    

    return (
        <div>
            <div id="map-box">
            { borough === "Bronx" ? <img src={bronx} alt="BronxMap" className="mapbox" style={{ height: "500px", width: "600px" }} /> : null}
            { borough === "Manhattan" ? <img src={manhattan} alt="ManhattanMap" className="mapbox" style={{ height: "500px", width: "600px" }} /> : null}
            { borough === "Queens" ? <img src={queens} alt="queensMap" className="mapbox" style={{ height: "500px", width: "600px" }} /> : null}
            { borough === "Brooklyn" ? <img src={brooklyn} alt="brooklynMap" className="mapbox" style={{ height: "500px", width: "600px" }} /> : null}
            { borough === "Staten Island" ? <img src={staten} alt="statenMap" className="mapbox" style={{ height: "500px", width: "600px" }}  /> : null}
            </div>
<br></br>
            <div >
                <div >
                    <h2>Your Local Representatives </h2>
                        {userList.map((userList) => {
                            return <Councilor reps={userList} />;
                        })}
                </div>
            </div>
        </div>
    )
}