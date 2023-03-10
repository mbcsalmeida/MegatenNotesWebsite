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

  code{
    font-weight: bold;
    color: crimson;
    border: 1px solid gray;
    padding-top: 2px;
    padding-bottom: 2px;
    padding-left: 10px;
    padding-right: 10px;
  }
`
