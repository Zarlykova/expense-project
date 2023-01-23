
import styled from "styled-components"

export const ExpenseItem = ({title, date, price}) =>{
   
 return (
 <>

  <Container >
  <Date >{date.toString()}</Date>
  <Title >{title}</Title>
  <Price >{price}</Price>
  
  
  </Container>
  </>
 )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
 padding: 20px;
 margin: 20px;
 background-color: gray;
 border-radius: 15px; 

`
const Date = styled.p`
    background-color: rgb(59, 59, 59);
 color: white;
 padding: 10px;
 border: 1px solid white;
 border-radius: 8px;
`


const Title = styled.p`
    font-size: 20px;
 font-weight: 550;
 color: #fff ;
`

const Price = styled.p`
    background-color: #40005D;
 border: 1px solid #fff;
 border-radius: 8px;
 padding: 10px 25px;
 color: #fff;
 font-size: 20px;
 font-weight: 550;
`