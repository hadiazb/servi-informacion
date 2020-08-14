import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 8vh;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 20px;
	padding-right: 20px;
	background-color: rgb(0, 0, 0);
	color: white;
	position: fixed;
	z-index: 1000;
`;

export const List = styled.ul`
	height: 30px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export const Item = styled.li`
	padding-left: 20px;
`;

