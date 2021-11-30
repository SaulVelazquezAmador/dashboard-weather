import React, { useState } from "react";
import Header from "./header/Header";
import Dashboard from "./Dashboard/Dashboard";
import Users from "./users/Users";
import { Redirect } from 'react-router-dom'

const Home = () =>{
    const [page, setPage] = useState("dashboard")

    if (!localStorage.getItem("logged")) {
        return <Redirect to="/" />
    }

    return(
        <div>
            <Header setPage={setPage}/>
            {page === "dashboard"
            ? <Dashboard/>
            : <Users/>
            }
        </div>
    )
}

export default Home