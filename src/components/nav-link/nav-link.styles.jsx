import styled from 'styled-components';
import {Link} from 'react-router-dom';
import '../../App.css';

export const NavLink = styled(Link)`
  display: table;
  text-decoration: none;
  border-bottom: 1px solid white;
  text-align: center;
  flex-grow: 1;
  animation-name: slide-in;
  animation-duration: 1s;

  &:hover{
    background-color: darkslateblue;
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
  animation-name: slide-in;
  animation-duration: 1.5s;
`
