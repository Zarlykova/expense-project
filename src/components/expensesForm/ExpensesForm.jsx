import { useState } from "react"
import { Button } from "../UI/Button/Button"
import { InputForm } from "../UI/InputForm/InputForm"
import styled from "styled-components"


export const ExpensesForm = (props) => {

const [title , setTitle] = useState("")
const [price , setPrice] = useState()
const [date , setDate] = useState()

const cancelHandler = (event) => {
event.preventDefault()
props.onClothForm()
}

const titleInputChangeHandler = (event) => {
 setTitle(event.target.value)
}

const priceInputChangeHandler = (event) => {
 setPrice(event.target.value)
}

const dateInputChangeHandler = (event) => {
 setDate(event.target.value)
}

const saveHandler = (event) => {
event.preventDefault()

const expenseData = {
  title,
  price,
  date,
  
}
props.onNewExpensesAdd(expenseData)
}

return(
  <div>
 <ExpenseForm >


   <InputForm 
   labelText="Зоголовок"
   inputType="text"
   placeholder="Введите..."
   id="name"
   value={title}
   onChange={titleInputChangeHandler}
   />

   <InputForm 
   labelText="Количество денег"
   inputType = "number"
   id="price"
   value={price}
   onChange={priceInputChangeHandler}
   />


   <InputForm 
   labelText="Дата"
   inputType="date"
   placeholder="дд.мм.гггг"
   id="date"
   value={ date}
   onChange={dateInputChangeHandler}
   />
 
 </ExpenseForm>
 <Buttons >
  <Button onClick={cancelHandler}>Отмена</Button>
  <Button onClick={saveHandler}>Добавить расходы</Button>
    </Buttons>
 </div>
)
}

const ExpenseForm = styled.form`
  display: flex;
 /* justify-content: space-between; */
 flex-wrap: wrap;
 margin: 40px auto;
 width: 100%;

`

const Buttons = styled.div`
  display: flex;
 justify-content: flex-end;
`