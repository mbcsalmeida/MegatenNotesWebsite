import styled from 'styled-components';

export const FloatingActionBar = styled.div`
  display: inline-flex;
  bottom: 16px;
  left: 85%;
  align-items: center;
  position: sticky;
  flex-direction: row-reverse;
  align-items: inherit;
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
  margin-bottom: 40px;
  flex-grow: 1;
  margin-right: 10px;
`

export const FloatingActionBarText = styled.a`
	text-align: center;
	font-size: 15px;
	color: white;
	border: 1px solid rgba(256, 256, 256, 0.50);
	margin-bottom: 2px;
	background: black;
	word-wrap: break-word;
  cursor: pointer;
  padding: 3px;
  text-decoration: none;

  &:hover{
    background-color: #006666
  }
`