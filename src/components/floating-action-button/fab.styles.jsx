import styled from 'styled-components';

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

export const FloatingActionBarBlock = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 3px;
  flex-grow: 1;
`

export const FloatingActionBarText = styled.li`
	text-align: center;
	font-size: 15px;
	color: white;
	border: 1px solid rgba(256, 256, 256, 0.50);
	margin-bottom: 2px;
	background: black;
	word-wrap: break-word;
`