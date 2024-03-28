import styled from 'styled-components';
import '../../App.css';


export const MarkdownContainer = styled.div`
	width: 65%;
	height: 100%;
	background-color: rgb(26,26,26,0.95);
  border: thick solid white;
  padding: 1rem;
  box-shadow: 0 0 10px #000;
	margin-top: 1px;
  margin-left: auto;
  margin-right: 1%;
  font-size: x-large;
  animation-name: slide-left;
  animation-duration: 1.5s;
  scroll-behavior: smooth;

  @media (max-width: 1200px){
    margin-left: 0 !important;
    margin-right: 0 !important;
    width: inherit !important;
    font-size: large !important;

    h2 {
      scroll-margin-top: 100px;
      scroll-snap-margin-top: 100px; /* iOS 11 and older */
    }

    img{
      width: 50% !important;
    }
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

  h2 {
    scroll-margin-top: 200px;
    scroll-snap-margin-top: 200px; /* iOS 11 and older */
  }

  

  img{
    border: 1px solid;
    display: block;
    margin: auto;
    max-width: 50vw;

    &::selection{
      width: 80%;
      transition: all 1s;
      position: relative;
      z-index: 3;
      box-shadow: 0 0 20px white;
    }
  }

  table{
    width: 100%;
    padding: 5px;
    border-spacing: 5px;
    margin-top:10%;
  }

  td{
    border: 1px solid white;
    border-radius: 15px;
    padding: 5px;

    &:hover{
      background-color: white;
      border: 3px solid #006666;
      z-index: 3;
      position: relative;
    }
  }

  a{
    text-decoration: none;
    color: #006666;
    
    &:visited{
      text-shadow: 1px 1px #006666;
    }
  }
`
