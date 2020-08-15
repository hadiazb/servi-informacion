import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 400px;
  overflow-y: scroll;
  border-radius: 10px;

  &::-webkit-scrollbar {
    width: 3px;
		background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
		background-color: rgba(0, 0, 0, .2);
    border-radius: 1px;
  }
`;