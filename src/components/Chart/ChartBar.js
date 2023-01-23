import styled from "styled-components";


const ChartBar = ({maximumPrice , currentPrice , label})=>{

    const fillHeight = (100 * currentPrice) / maximumPrice;

return (
    <Container >
        <ChartBarInner >
            <ChartBarFill  style={{height:`${fillHeight}%`}}></ChartBarFill>
        </ChartBarInner>
        <ChartBarLabel >{label}</ChartBarLabel>
    </Container>
)
}
export default ChartBar;


const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ChartBarInner = styled.div`
 height: 100%;
    width: 100%;
    border:1px solid #313131;
    border-radius: 12px;
    background-color: #c3b4f3;
    overflow:hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

const ChartBarFill = styled.div`
background-color: #4826b9;
    width: 100%;
    transition: all 0.3s ease-out;
`

const ChartBarLabel = styled.p`
font-weight: bold;
    font-size: 0.5rem;
    text-align: center;

`