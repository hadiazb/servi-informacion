import styled from 'styled-components';

export const Container = styled.div`
	display: ${(props) => props.visibility ? props.visibility : 'block'};
	position: absolute;
	bottom: 0;
	left: 0;
	top: 0;
	right: 0;
	background: rgba(0, 0, 0, 0.4);
`;

export const Card = styled.div`
	width: 320px;
	height: 500px;
	display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
	position: absolute;
	bottom: calc(50% - 250px);
	left: calc(50% - 160px);
	background: rgba(255, 255, 255, 0.9);
	border-radius: 10px;
	box-shadow: 0 0 15px black;
`;
