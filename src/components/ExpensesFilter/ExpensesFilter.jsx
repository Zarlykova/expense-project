import styled from "styled-components";


const ExpensesFilter = ({ value , onChange })=>{
    return(
        <div className="expenses-filter">
            <Container >
                <label>Filter by year</label>
                <select value={value} onChange={onChange}>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>

            </Container>

        </div>
    )
}
export default ExpensesFilter;

const Container = styled.div`
     width: 780px;
   display: flex;
   justify-content: space-between;
   margin: 0 auto;
   background-color: #444343;
   padding: 20px;
   border-radius: 15px;
   font-size: 20px;
   color: white;
`