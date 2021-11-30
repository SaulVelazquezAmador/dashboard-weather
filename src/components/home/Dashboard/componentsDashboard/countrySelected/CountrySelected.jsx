import ImgCountries from "../countries/ImgCountries"
import ContentH from "../ContentH"
import Title from "../Title"
import Card from "../Card"
const CountrySelected = ({country}) =>{
    return(
        <Card>
            <Title>Titulo</Title>
            <ContentH>
                <ImgCountries src={country.flag} alt={country.name}/>
                {country.name}
            </ContentH>
        </Card>
    )
}
export default CountrySelected