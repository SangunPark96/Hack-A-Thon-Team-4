import "./Councilor.css"

export default function Councilor({reps}){
    return(
        <div>
                <div className="RepMap">
                    <h3>{reps.name}</h3>
                    <br></br>
                    <strong>District Number:</strong><p>{reps.district}</p>
                   <strong>Political Party:</strong><p>{reps.political_party}</p>
                </div>
        </div>
    )
}