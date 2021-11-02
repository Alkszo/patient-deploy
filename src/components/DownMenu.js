import React from 'react';
import { NavLink } from 'react-router-dom';

const DownMenu = () => {
    return(
        <div className="down-menu navbar">
            <ul>
                <li className="nav-link"><a href="https://www.europeapatient.com" target="_blank"  rel="noreferrer">Healing Patient Europe, conference</a></li>
                <li>
                    <div className="social-links">
                        <a className="social-link-plus" href="mailto: europe.a.patient@gmail.com">M</a>
                        <a className="social-link" href="https://www.facebook.com/europeapatient" target="_blank"  rel="noreferrer">F</a>
                        <a className="social-link" href="https://twitter.com/europeapatient" target="_blank"  rel="noreferrer">L</a>                        
                    </div>
                </li>
            </ul> 
        </div>
    )
}

export default DownMenu;

