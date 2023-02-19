import { Fragment } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

import './topbar.styles.css'
const TopBar = () => {

    const location = useLocation();

    const topBarClass = () => {
        if(location.pathname.includes("/notes")){
            return 'Topbar_left'
        }
        else{
            return 'Topbar'
        }
    }

    return (
        <Fragment>
            <div className={topBarClass()}>
                <Link className='logo-container' to='/'>
                    Logo
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/home'>
                        Home
                    </Link>
                    <Link className='nav-link' to='/about'>
                        About
                    </Link>
                    <Link className='nav-link' to='/notes/red'>
                        Notes
                    </Link>
                    <Link className='nav-link' to='/credits'>
                        Credits
                    </Link>
                    <Link className='nav-link' to='/checklist'>
                        Checklist
                    </Link>

                </div>
            </div>
            <Outlet />
        </Fragment>

    );
}

export default TopBar;