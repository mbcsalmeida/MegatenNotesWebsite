import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const MarkdownContainer = styled.div`
	width: 65%;
	height: 100%;
	background-color: rgb(26,26,26,0.95);
  border: thick solid white;
  padding: 1rem;
  box-shadow: 0 0 10px #000;
	margin-top: 1px;
  margin-left: auto;

  @media (max-width: 700px){
    margin-left: 0;
    margin-right: 0;
    width: inherit;
  }

  .main-container-notes{
    width: inherit !important;
    margin-right: auto;
  }  
`

export const FloatingActionBar = styled.div`
  width: 10%;
  height: auto;
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 30px;
  right: 30px;
`

export const FloatingActionBarIcon = styled.div`
	width: 40px;
	height: 60px;
	background-color: orange;
	border-radius: 100%;
  margin-left: auto;
  flex-grow: 1;
`

export const FloatingActionBarBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3px;
  flex-grow: 1;
`

export const FloatingActionBarText = styled.span`
	text-align: center;
	font-size: 15px;
	color: white;
	border: 1px solid rgba(256, 256, 256, 0.50);
	margin-bottom: 2px;
	background: black;
	word-wrap: break-word;
`
