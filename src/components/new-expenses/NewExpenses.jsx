import { useState } from "react"
import { ExpensesForm } from "../expensesForm/ExpensesForm"
import { Button } from "../UI/Button/Button"
import styled from "styled-components"


export const NewExpenses = ({onNewExpensesAdd}) => {
  const [form, setForm] = useState(false)

  const openNewForm = () => {
   setForm((prevState) => !prevState)
  }

 return (
  <Div >
  
  { form ?  <ExpensesForm onClothForm={openNewForm} onNewExpensesAdd={onNewExpensesAdd} /> :  <Button onClick={openNewForm}>Добавить новый расход</Button>
  }
  </Div>
 )
}

const Div = styled.div`
  width: 780px;
 margin: 10px auto;
 padding: 30px;
 background: #AD9BE9;
border-radius: 12px;
`