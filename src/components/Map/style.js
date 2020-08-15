import styled from 'styled-components';

export const Container = styled.div`
	height: 100vh;
  width: calc(100% - 320px);

	@media (max-width: 550px) {
		width: 100%;
	}
`;

export const Button = styled.button`
	width: 10px;
	height: 10px;
	border: none;
	background: none;
`;
