import { useState, useEffect } from "react"
import Card from "../Card"
import Title from "../Title"
import ContentH from "../ContentH"
const Time = ({data}) =>{

    const [seg, setSeg] = useState(0)
    const [min, setMin] = useState(0)
    //Debido a que los minutos y los segundos son los mismos en todo el mundo
    //los obtenemos directamente de sistema
    var hoy = new Date()
    var segundos = hoy.getSeconds()
    var minutos = hoy.getMinutes()

    //renderizamos el componente cada segundo para actualizar la hora cada segundo
    useEffect(()=>{
        const timer = setInterval(()=>{setSeg(segundos); setMin(minutos)},1000)
        return ()=> clearInterval(timer)
    },[seg, minutos, segundos])

    return(
        <Card>
            <Title>Hora</Title>
            <ContentH>
                {
                    //Extraemos la hora de la zona
                    data.location.localtime.length === 15   //si la longitud es de 15 significa que la hora es de un solo numero (ej. 3)
                    ? <h2>{data.location.localtime.substring(10, 12)}:{min}:{seg}</h2> //por lo que buscamos la hora de la posicion 10 a la 12
                    : <h2>{data.location.localtime.substring(10, 13)}:{min}:{seg}</h2>  //si no tiene 15 la buscamos de la 10 a la 13
                }
            </ContentH>
        </Card>
    )
}
export default Time