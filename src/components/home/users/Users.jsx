import { useState, useEffect } from "react"
import ContainerUsers from "./ContainerUsers"
import Table from "./Table"
import TitleColumn from "./TitleColumn"
import Axios from "axios"

const Users = () =>{
    const [usertable, setUsertable] = useState([])

    useEffect(()=>{
        
        const token = localStorage.getItem("logged")

        const config = {
            headers: {
                authorization: `Bearer ${token}`
            } 
        }
        async function fetchUser(){
            const res = Axios.get(`http://localhost:3050/protected`,config)
            res.then(r => {
                setUsertable(r.data.data)
            })
        }
        fetchUser()
        
    },[])
    return(
        <ContainerUsers>
            <Table>
                <thead>
                    <tr><td>Lista de usuarios del sistema</td></tr>
                </thead>
                <tbody>
                    <tr>
                        <TitleColumn className="title-column">Nombre</TitleColumn>
                        <TitleColumn className="title-column">Correo electronico</TitleColumn>
                        <TitleColumn className="title-column">Fecha Registro</TitleColumn>
                        <TitleColumn className="title-column">Ultimo login</TitleColumn>
                    </tr>
                    {
                        usertable.map((u, index)=>(
                            <tr key={index}>
                                <TitleColumn>{u.name}</TitleColumn>
                                <TitleColumn>{u.email}</TitleColumn>
                                <TitleColumn>{u.register}</TitleColumn>
                                <TitleColumn>{u.lastlogin}</TitleColumn>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </ContainerUsers>

        )
}
export default Users