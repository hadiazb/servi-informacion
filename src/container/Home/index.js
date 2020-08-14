import React, { Fragment } from 'react';
import { Main } from '../../components/Main/index';
import { Container } from './style';
import { Map } from '../../components/Map/index';

export const Home = () => {
	return (
		<Container>
			<Map />
			<Main />
		</Container>
	);
};
