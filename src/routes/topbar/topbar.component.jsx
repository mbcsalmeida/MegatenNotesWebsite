import { Fragment } from 'react';
import {NavLogo} from '../../components/nav-link/nav-link.styles.jsx'
import { Outlet} from 'react-router-dom';
import {StyledTopbar, TopBarLink, LinkContainer, TopBarLogo} from './topbar.styles.jsx';
import {Link} from 'react-router-dom';
import icon from '../../images/iconalt.png'

const TopBar = () => {

    return (
        <Fragment>
              <StyledTopbar>
                <Link to='/'>
                    <NavLogo src={icon} />
                </Link>
                <LinkContainer>
                    <TopBarLink to='/home'>
                        Home  
                    </TopBarLink>
                    <TopBarLink to='/about'>
                        About
                    </TopBarLink>
                    <TopBarLink to='/notes'>
                        Notes
                    </TopBarLink>
                    <TopBarLink to='/credits'>
                        Credits                    
                    </TopBarLink>
                    <TopBarLink to='/checklist'>
                        Checklist
                    </TopBarLink>
                </LinkContainer>
            </StyledTopbar>
            <Outlet />
        </Fragment>
    );
}

export default TopBar;
