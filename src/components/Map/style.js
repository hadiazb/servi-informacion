import styled from 'styled-components';

export const Container = styled.div`
	height: 100vh;
  width: calc(100% - 320px);

	@media (max-width: 550px) {
		width: 100%;
	}
`;
