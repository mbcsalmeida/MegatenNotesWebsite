import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import {StyledSideBar} from './sidebar.styles.jsx';
import {NavLink, NavLogo, NavLinkText} from '../../components/nav-link/nav-link.styles.jsx'
import icon from '../../res/icon.png'

const SideBar  = () => {

    return (
        <Fragment>
          <StyledSideBar>
                <Link to='/'>
                    <NavLogo src={icon} />
                </Link>
                <NavLink  to='/home'>
                        <NavLinkText>Home</NavLinkText>  
                </NavLink>
                <NavLink to='/about'>
                        <NavLinkText>About</NavLinkText>
                </NavLink>
                <NavLink to='/games'>
                        <NavLinkText>Notes</NavLinkText>
                </NavLink>
                <NavLink to='/credits'>
                        <NavLinkText>Credits</NavLinkText>                    
                </NavLink>
                <NavLink to='/checklist'>
                    <NavLinkText>Checklist</NavLinkText>
                </NavLink>
          </StyledSideBar>
          <Outlet />
        </Fragment>

    );
}

export default SideBar;
