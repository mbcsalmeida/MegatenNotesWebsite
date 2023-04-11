import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const StyledTopbar = styled.div`
    margin: 0px;
    display: block;
    position: sticky;
    top: 0;
    border: 2px solid white;
    background-color: black;
    margin-bottom: 10px;
`


export const LinkContainer = styled.div`
	display: flex;
	text-align: center;
    border-top: 1px solid white;
`

export const TopBarLogo = styled.img`
  display: block;
  height: auto;
  margin: auto;
  width: 50%;
`


export const TopBarLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 20px;
    font-weight: bold;
    padding: 5px;
    flex-grow: 1;
    border-right: 1px solid white;

    &:hover{
        background-color: darkslateblue;
    }

    @media (max-width: 700px){
        font-size: 5vw;
      }
`

