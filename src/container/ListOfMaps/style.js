import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	border: 1px solid red;
	padding: 100px 20px 50px;
`;

export const List = styled.div`
	width: 100%;
	border: 1px solid green;
	display: grid;
	grid-template-columns: repeat(4, minmax(260px, 1fr));
	grid-template-rows: repeat(10, 300px);
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
	height: 100%;
	border: 1px solid green;
`;
