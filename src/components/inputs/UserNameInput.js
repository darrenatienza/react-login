import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const  UserNameInput = (props) => {
    return (
        <div className="input-group form-group">
            <div className="input-group-prepend">
                <span className="input-group-text"><FontAwesomeIcon icon={"user"}/></span>
            </div>
            <input type="text" className="form-control" placeholder="userName" 
                value={props.text} 
                onChange={e => props.action(e.target.value)} />
        </div>
    )
}
