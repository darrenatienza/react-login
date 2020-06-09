import React, { useEffect } from 'react'

export const CheckBoxInput = (props) => {
   
    return (
            <div className="row align-items-center remember">
            <input type="checkbox" checked={props.checked } onChange={() => props.action()} /> Remember Me
        </div>
       
    )
}
