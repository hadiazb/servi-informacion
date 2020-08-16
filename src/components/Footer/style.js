import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 4vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
	background-color: rgb(0, 0, 0);
  color: white;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1000;
`;

export const Anchor = styled.a`
  color: #ffffff;
  text-decoration: none;
  &:hover{
    text-decoration: underline;
  }
`;