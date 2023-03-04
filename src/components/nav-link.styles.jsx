import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const NavLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: white;
  border-bottom: 1px solid white;
  line-height: 10vh;
  text-align: center;
  
  &:hover{
    background-color: rgb(88,26,15);
    transition: background-color 0.2s;
  }

`

export const NavLogo = styled.img`
  display: block;
  height: auto;
  margin: auto;
  width: 50%;
`
