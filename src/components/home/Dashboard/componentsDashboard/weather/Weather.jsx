import Card from "../Card"
import ContentH from "../ContentH"
import Title from "../Title"

const styles = {
    icon:{
        width: "25%",
        margin: "0",
        marginRight: "25%"
    },
    data:{
        margin: "0%",
        padding: "0%",
        marginLeft: "3%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems    : "center",
    },
    text:{
        margin: 0,
        width: "100%"
    }
}

const Weather = ({data}) =>{

    return(
        <Card>
            <Title>Clima</Title>
            <ContentH>
                <img style={styles.icon} src={data.current.condition.icon} alt="icon" />
                
                <div style={styles.data}>
                    <h2 style={styles.text}>{data.current.temp_c} C</h2>
                    <p style={styles.text}>{data.current.condition.text}</p>
                </div>
            </ContentH>
        </Card>
    )
}
export default Weather