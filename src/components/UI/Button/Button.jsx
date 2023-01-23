import styled from "styled-components"

export const Button = (props) => {
  return (
   <Btn 
   onClick={props.onClick}>
    {props.children}
   </Btn>
  )
}

const Btn = styled.button`
  background-color: rgb(102, 23, 175);
 color: white;
 border-radius: 9px;
 padding: 20px 20px;
 border: none;
 margin: 20px;
`