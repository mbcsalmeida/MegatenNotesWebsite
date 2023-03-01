import { Fragment } from 'react';
import {NavLogo} from '../../components/nav-link.styles.jsx'
import { Outlet, Link, useLocation } from 'react-router-dom';
import {StyledTopbar} from './topbar.styles.jsx'

const TopBar = () => {

    return (
        <Fragment>
              <StyledTopbar>
                <Link to='/'>
                    <NavLogo src="images/iconalt.png"/>
                </Link>
                <Link to='/home'>
                        Home  
                </Link>
                <Link to='/about'>
                        About
                </Link>
                <Link to='/notes'>
                        Notes
                </Link>
                <Link to='/credits'>
                        credits                    
                </Link>
                <Link to='/checklist'>
                    Checklist
                </Link>
            </StyledTopbar>
            <Outlet />
        </Fragment>

    );
}

export default TopBar;
