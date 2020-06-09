import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PasswordInput = (props) => {
 
   return (
        <div className="input-group form-group">
            <div className="input-group-prepend">
                <span className="input-group-text"><FontAwesomeIcon icon={"lock"} /></span>
            </div>
            <input type="password" className="form-control" placeholder="Password" 
                value={props.text} onChange={e => props.action(e.target.value)}
                />
        </div>
    )
}
