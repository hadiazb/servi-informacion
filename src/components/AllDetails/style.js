import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 90%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;

export const Table = styled.table`
	width: 95%;
	height: 200px;
`;

export const Row = styled.tr`
	height: 30px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.5);
`;

export const CellTh = styled.th`
	text-align: ${(props) =>
		props.orientation ? props.orientation : 'center'};
`;

export const CellTd = styled.td`
	padding: 0 40px;
	text-align: ${(props) =>
		props.orientation ? props.orientation : 'center'};
`;
