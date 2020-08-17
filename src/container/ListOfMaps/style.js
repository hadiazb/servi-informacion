import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	padding: 100px 20px 50px;
	text-align: center;
	color: rgba(255, 255, 255, .5);
	background-color: #242524;
`;

export const List = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, minmax(260px, 1fr));
	grid-template-rows: repeat(5, 300px);
	grid-gap: 10px;
	@media (max-width: 1125px) {
    grid-template-columns: repeat(3, minmax(260px, 1fr));
	}
  @media (max-width: 850px) {
    grid-template-columns: repeat(2, minmax(260px, 1fr));
	}
  @media (max-width: 580px) {
    grid-template-columns:  minmax(260px, 1fr);
	}
`;

export const Item = styled.div`
	width: 100%;
	height: 90%;
	overflow: hidden;
	border: 1px solid black;
	border-radius: 20px;
	background-color: rgba(255,255,255, .2);
	box-shadow: 0 0 5px black;
`;

export const Title = styled.h2`
	padding: 20px 0;
`;
