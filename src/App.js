
import { useState } from 'react';
import './App.css';
import  Expenses  from './components/expenses/Expenses';
import ExpensesFilter from './components/ExpensesFilter/ExpensesFilter';
import { NewExpenses } from './components/new-expenses/NewExpenses';
import Chart from "./components/Chart/Chart"

// const expenses = [
//   {
//     id:"e1",
//   title: 'Toilet paper',
//   price: "300 сом",
//   date: new Date()
// },
// {
//   id:"e2",
//   title: 'Charger',
//   price: "700 сом",
//   date: new Date()
// },
// ]

function App() {

 
  const [expenses, setExpenses] = useState([ {
    id:"e1",
    title: 'Toilet paper',
    price: 300,
    date: new Date(2020, 11 , 18)
  },
  {
    id:"e2",
    title: 'Charger',
    price: 700,
    date: new Date( 2022 , 8 , 8)
  },
  {
    id:"e3",
    title: 'Book',
    price: 1000,
    date: new Date( 2021 , 2 , 10)
  },
  {
    id:"e4",
    title: 'Phone',
    price: 1000,
    date: new Date( 2023 , 11 , 5)
  },
  {
    id:"e5",
    title: 'Water',
    price: 100,
    date: new Date( 2019 , 5 , 10)
  },

])
console.log("expenses",expenses)

  const onNewExpensesAdd = (data) => {
    
    const updatedExpenses = [...expenses]
    updatedExpenses.push(data)
    setExpenses(updatedExpenses)
  }



  const [selectedYear , setSelectedYear ]= useState("2022")

  const yearChangeHandler = (event)=>{
    setSelectedYear( event.target.value ) 
  }

const filteredItems = expenses.filter((elem)=>{
return (
  elem.date.getFullYear().toString() === selectedYear

)  
})


 console.log(filteredItems , "filtereditems")




  return (
    <div className="App">
     
      <NewExpenses onNewExpensesAdd ={onNewExpensesAdd}/> 
      <ExpensesFilter value={selectedYear} onChange={yearChangeHandler} />
       <Chart items={filteredItems}/>
      <Expenses  expenses={filteredItems}></Expenses>
    
    </div>
  );
}

export default App;
