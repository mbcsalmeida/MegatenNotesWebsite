import styled from 'styled-components';


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
    width: initial;

    &:hover{
      width: 80%;
      transition: all 2s;
    }
  }
`
