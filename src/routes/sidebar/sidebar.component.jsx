import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import {StyledSideBar} from './sidebar.styles.jsx';
import {NavLink, NavLogo, NavLinkText} from '../../components/nav-link/nav-link.styles.jsx'
import icon from '../../res/icon.png'

const SideBar  = (props) => {
    return (
        <Fragment>
          <StyledSideBar>
                <Link to='/'>
                    <NavLogo src={icon} />
                </Link>
                {
                    Object.keys(props.titles).map((title) => {
                        return (<NavLink key={title}  to={props.titles[title]}>
                            <NavLinkText>{title}</NavLinkText>  
                        </NavLink>);
                    })
                }
          </StyledSideBar>
          <Outlet />
        </Fragment>

    );
}

export default SideBar;
