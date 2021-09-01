import React from 'react';
import { NavLink } from 'react-router-dom';

const DownMenu = () => {
    return(
        <div className="down-menu navbar">
            <ul>
                <li className="nav-link"><NavLink  activeClassName="active" to='/involvement'>Get Involved</NavLink></li>
                <li>
                    <div className="social-links">
                        <a className="social-link" href="https://www.facebook.com/europeapatient" target="_blank">F</a>
                        <a className="social-link" href="https://twitter.com/europeapatient" target="_blank">L</a>
                    </div>
                </li>
            </ul> 
        </div>
    )
}

export default DownMenu;