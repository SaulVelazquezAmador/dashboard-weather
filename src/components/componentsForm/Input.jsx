import styled from "styled-components"
import { useField } from 'formik'

const MyLabel = styled.label`
    color: #000;
`
const MyInput = styled.input`
    outline: none;
    border: none;
    border-bottom: 1px solid blue;
    margin-bottom: 5%;
    margin-top: 3%;
    width: 100%
`
const MyErrorMessage = styled.span`
    color: red;
`
const MyContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Input = ({label, ...props}) =>{
    const [field, meta] = useField(props)
    return(
        <MyContainer>
            {meta.error && meta.touched 
            ? <MyErrorMessage>{meta.error}</MyErrorMessage>
            : null}
            <MyLabel>{label}</MyLabel>
            <MyInput {...field}{...props}/>
        </MyContainer>
    )
}

export default Input