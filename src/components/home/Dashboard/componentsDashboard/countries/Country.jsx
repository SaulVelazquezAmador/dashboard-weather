import styled from "styled-components";

const Country = styled.div`
    display        : flex;
    flex-direction : row;
    margin-left    : auto;
    margin-right   : auto;
    padding        : 3%;
    line-height    : 75px;
    justify-content: center;
    align-items    : center;
    background-color: #fff;
    &:hover{
        background-color: #eee;
        cursor          : pointer;
    }
`
export default Country