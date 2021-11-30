import { useState, useEffect } from 'react'
import Container from './componentsDashboard/Container'
import ContainerCards from './componentsDashboard/ContinerCards'
import Card from './componentsDashboard/Card'
import Countries from './componentsDashboard/countries/Countries'
import ContainerCountries from './componentsDashboard/ContainerCountries'
import CountrySelected from './componentsDashboard/countrySelected/CountrySelected'
import mexico from './componentsDashboard/images/003-mexico.svg'
import Timezone from './componentsDashboard/timezone/Timezone'
import Weather from './componentsDashboard/weather/Weather'
import Time from './componentsDashboard/Time/Time'
import axios from 'axios'

const Dashboard = () =>{
    const [country, setCountry] = useState({name:"México", flag: mexico})
    const [zone, setZone] = useState("Mexico_City")
    const [data, setData] = useState()

    useEffect(()=>{
        async function fetchData(){
            const res = axios.post(`http://api.weatherapi.com/v1/current.json?key=3ab334a450af4c74a15205844211408&q=${zone}&aqi=yes`)
            res.then(r => {
                setData(r.data)
            })
        }
        fetchData()
    },[zone])

    return(
        <Container>
            <ContainerCards>
                {data ? <Weather data={data}/> : <Card/>}
                <CountrySelected country={country}/>
                <Card>Card</Card>
                {data ? <Time data={data}/> : <Card>Card</Card>}
                <Card>Card</Card>
                <Timezone setZone={setZone} country={country}/>
            </ContainerCards>
            <ContainerCountries>
                <Countries country={country} setCountry={setCountry}/>    
            </ContainerCountries>
        </Container>
    )
}
export default Dashboard