import { Fragment } from 'react';
import {NavLogo} from '../../components/nav-link/nav-link.styles.jsx'
import { Outlet} from 'react-router-dom';
import {StyledTopbar, TopBarLink, LinkContainer, TopBarLogo} from './topbar.styles.jsx';
import {Link} from 'react-router-dom';
import icon from '../../res/iconalt.png'

const TopBar = (props) => {

    return (
        <Fragment>
              <StyledTopbar className={props.className}>
                <Link to='/'>
                    <TopBarLogo src={icon} />
                </Link>
                <LinkContainer>
                    {
                    Object.keys(props.titles).map((title) => {
                        return (<TopBarLink key={title} to={props.titles[title]}>
                            {title} 
                        </TopBarLink>);
                    })
                }
                </LinkContainer>
            </StyledTopbar>
            <Outlet />
        </Fragment>
    );
}

export default TopBar;
