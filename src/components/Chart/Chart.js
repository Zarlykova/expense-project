import ChartBar from "./ChartBar"
import styled from "styled-components";

const Chart = ({items}) =>{
    const maximumPrice = 2000;
    const month = [
        {
            label:"Январь",
            currentPrice:0,
        },
        {
            label:"Февраль",
            currentPrice:0,
        },
        {
            label:"Март",
            currentPrice:0,
        },
        {
            label:"Апрель",
            currentPrice:0,
        },
        {
            label:"Май",
            currentPrice:0,
        },
        {
            label:"Июнь",
            currentPrice:0,
        },
        {
            label:"Июль",
            currentPrice:0,
        },
        {
            label:"Август",
            currentPrice:0,
        },
        {
            label:"Сентябрь",
            currentPrice:0,
        },
        {
            label:"Октябрь",
            currentPrice:0,
        },
        {
            label:"Ноябрь",
            currentPrice:0,
        },
        {
            label:"Декабрь",
            currentPrice:0,
        },
    ]
console.log("kdjsf",new Date().getMonth())
items.forEach((item) => {
    const monthNumber = item.date.getMonth()
    console.log(monthNumber)
    month[monthNumber].currentPrice += item.price
    
});

return(
    <ChartContainer >
        {month.map((item)=>{
            return(
                 <ChartBar key={item.label} label={item.label} currentPrice={item.currentPrice} maximumPrice={maximumPrice}/>
            )

        })}
       
    </ChartContainer>
)
}
export default Chart;

const ChartContainer = styled.div`
padding: 1rem;
    border-radius: 12px;
    background-color: #f8dfff;
    text-align: center;
    display:flex;
    justify-content:space-around;
    height: 10rem;
    width: 780px;
    margin: 0 auto;
`