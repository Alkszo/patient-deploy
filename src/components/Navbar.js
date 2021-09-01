import React from 'react';
import { NavLink } from 'react-router-dom';
import tealLogo from './TealLogoSmall.png'

const Navbar = () => {
    return(
        <div className="navbar top-menu">
            <ul>
                <li><NavLink activeClassName="active" exact to='/'><img src={tealLogo}/></NavLink></li>
                <li><NavLink activeClassName="active" to='/supporters'>Who support us</NavLink></li>
                <li><NavLink activeClassName="active" to='/team'>Our team</NavLink></li>
                <li><NavLink activeClassName="active" to='/recommendations'>Our recommendations</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar