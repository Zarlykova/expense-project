import { ExpenseItem } from "../expense-item/ExpenseItem"
import styled from "styled-components"

 const Expenses = ({expenses}) => {
 return (
  <Ul >
  {
   expenses.map((elem, index) => {
    return(
   <ExpenseItem 
    key={index}
    date = {elem.date}
    title = {elem.title}
    price = {elem.price}
    />
    )})
  }
  </Ul>
 )
}

export default Expenses;

const Ul = styled.ul`
   width: 790px;
 margin: 30px auto;
 padding: 20px;
 background-color: #444343

`