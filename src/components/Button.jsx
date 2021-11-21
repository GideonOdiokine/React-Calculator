import React from 'react'
import './Button.css'



const isOperator=val=>{
    return !isNaN(val) || val==="." || val==="="
}
const Button = ({addToInput, children}) => {
    return (
        <div className={`button-wrapper ${isOperator(children) ? null : 'operator'}`} onClick={()=>addToInput(children)} >
            {children}
        </div>
    )
}

export default Button
