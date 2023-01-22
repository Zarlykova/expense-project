import "./Button.css"

export const Button = (props) => {
  return (
   <button 
   className="btn" onClick={props.onClick}>
    {props.children}
   </button>
  )
}