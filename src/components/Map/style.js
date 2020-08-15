import styled from 'styled-components';

export const Container = styled.div`
	height: 100vh;
	width: calc(100% - 320px);

	@media (max-width: 550px) {
		width: 100%;
	}
`;

export const Circle = styled.div`
	width: ${(props) =>
		props.radius ? props.radius : '10px'};
	height: ${(props) =>
		props.radius ? props.radius : '10px'};
	border-radius: 50px;
	border: 1px solid red;
	background-color: rgba(255, 60, 0, 0.295);
`;
