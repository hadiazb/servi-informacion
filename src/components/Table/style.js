import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 65%;
  overflow-y: scroll;
  overflow-x: hidden;
  border-radius: 10px;
  box-shadow: 0 0 4px black;
  background-color: white;

  &::-webkit-scrollbar {
    width: 3px;
		background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
		background-color: rgba(0, 0, 0, .2);
    border-radius: 1px;
  }
`;
