

export default function Councilors({councilors}) {

    console.log(councilors)

    return (
        <div>
            <h3>{councilors.name}</h3>
            <h4>District: {councilors.district}</h4>
            <h4>Borough: {councilors.borough}</h4>
            <h4>Party: {councilors.political_party}</h4>
        </div>
    )
}