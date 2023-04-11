import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const NavLink = styled(Link)`
  display: table;
  text-decoration: none;
  border-bottom: 1px solid white;
  text-align: center;
  flex-grow: 1;

  &:hover{
    background-color: rgb(88,26,15);
    transition: background-color 0.2s;
  }
`

export const NavLinkText = styled.h1`
  display: table-cell;
  vertical-align: middle;
  color: white;
`

export const NavLogo = styled.img`
  display: block;
  height: auto;
  margin: auto;
  width: 100%;
  border-bottom: 1px solid white; 
`
