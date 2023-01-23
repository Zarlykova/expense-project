import styled from "styled-components"


export const InputForm = ({id, inputType, labelText, placeholder, value, onChange}) => {
 
 return (
  <Container >

   <LabelText  
    htmlFor ={id}> {labelText} </LabelText>
    
   <Input 
   type={inputType} 
   id={id} 
   placeholder={placeholder}
   value={value}
   onChange={onChange}/>

  </Container>
 )
}


const Container = styled.div`
    display: flex;
 flex-direction: column;
 padding: 20px;
 margin-top: 10px;
`

const LabelText = styled.label`
    font-size: 20px;
 font-weight: 550;
`

const Input = styled.input`
    padding: 10px;
 border-radius: 8px;
 border: none;
 margin: 10px 30px;
`