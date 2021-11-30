import china from '../images/001-china.svg'
import espana from '../images/002-espana.svg'
import mexico from '../images/003-mexico.svg'
import Country from './Country'
import ImgCountries from './ImgCountries'
import Title from '../Title'
import CardCountries from './CardCountries'

const Countries = ({country, setCountry}) =>{

    const countries = [{name:"México",flag:mexico},
                        {name:"Spain",flag:espana},
                        {name:"China",flag:china}]

    return(
        <CardCountries>
            <Title>Seleccionar País</Title>
            {countries.map(c => 
                <Country key={c.name} onClick={()=>{setCountry({name: c.name, flag: c.flag})}}>
                    <ImgCountries src={c.flag} alt={c.name}/>
                    {c.name}
                </Country>)
            }
        </CardCountries>
    )
}
export default Countries