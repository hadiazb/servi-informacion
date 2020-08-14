import styled from 'styled-components';

export const Container = styled.div`
	width: 320px;
	height: 100vh;
  padding: 10vh 20px 6vh;
  position: relative;
	background-color: rgb(0, 150, 150);
	@media (max-width: 550px) {
    width: 100%;
  }
`;
