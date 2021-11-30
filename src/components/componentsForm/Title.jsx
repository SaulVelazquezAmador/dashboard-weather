import styled from "styled-components"

const MyTitle = styled.h2`
    margin-top: 5%;
    margin-bottom: 5%;
`

const Title = ({title}) =>{
    return(
        <MyTitle>{title}</MyTitle>
    )
}
export default Title