import { useState } from "react"
import Nav from "./Nav"
import Button from "./Button"
import DivButtons from "./DivButtons"
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'

const styles = {
    exit: (display) =>({
        display: display
    })
}

const Header = ({setPage}) =>{

    const [display, setDisplay] = useState("none")
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    const handleLeave = () =>{
        setDisplay("none")
    }

    const handleHover = () =>{
        setDisplay("inline")
    }

    const handleClick = () =>{
        dispatch({
            type: 'LOGOUT',
            payload: { name: "", KEY:"" } 
        })
        localStorage.clear()
    }
    if (!localStorage.getItem("logged")) {
        return <Redirect to="/" />
    }
    return(
        <Nav>
            <DivButtons>
                <Button onClick={()=>setPage("dashboard")}>Dashboard</Button>
                <Button onClick={()=>setPage("users")}>Usuarios</Button>
            </DivButtons>
            <DivButtons>
                <Button
                    onMouseOver={handleHover} 
                    onMouseLeave={handleLeave}                
                >
                    {state.name}
                </Button>
                <Button
                    onMouseOver={handleHover} 
                    onMouseLeave={handleLeave}
                    style={styles.exit(display)}
                    onClick={handleClick}                 
                >
                    Cerrar Sesion
                </Button>
            </DivButtons>
        </Nav>
    )
}
export default Header