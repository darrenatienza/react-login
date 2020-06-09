import React from 'react'
import {Link} from "react-router-dom"
export const Dashboard = () => {
    return (
        <div>
            <nav>
          <ul>
            <li>
              <Link to ="/">Home</Link>
            </li>
            <li>
              <Link to ="/login">Login</Link>
            </li>
          </ul>
        </nav>
            <p>This is dashboard</p>
        </div>
    )
}
