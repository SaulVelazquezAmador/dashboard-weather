import Card from "../Card"
import Title from "../Title"
import ContentV from "../ContentV"
import Zone from "./Zone"

const Timezone = ({setZone, country}) =>{
    const zones = [
        {name: "México", data:["Mexico_City","Chihuahua"]},
        {name: "Spain", data:["Madrid","Canarias"]},
        {name: "China", data:["China"]},        
    ]
    return(
        <Card>
            <Title>Zona Horaria</Title>
            {
                zones.map(z => (z.name === country.name 
                ? <ContentV key={z.name}>{z.data.map(d => <Zone key={d} onClick={()=>{setZone(d)}}>{d}</Zone>)}</ContentV> 
                : null))
            }
        </Card>
    )
}
export default Timezone