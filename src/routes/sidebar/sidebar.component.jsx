import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import {StyledSideBar} from './sidebar.styles.jsx';
import {NavLink, NavLogo} from '../../components/nav-link.styles.jsx'

const SideBar  = () => {

    return (
        <Fragment>
          <StyledSideBar>
                <Link to='/'>
                    <NavLogo src="images/icon.png"/>
                </Link>
                <NavLink to='/home'>
                        Home  
                </NavLink>
                <NavLink to='/about'>
                        About
                </NavLink>
                <NavLink to='/notes'>
                        Notes
                </NavLink>
                <NavLink to='/credits'>
                        credits                    
                </NavLink>
                <NavLink to='/checklist'>
                    Checklist
                </NavLink>
          </StyledSideBar>
          <Outlet />
        </Fragment>

    );
}

export default SideBar;
