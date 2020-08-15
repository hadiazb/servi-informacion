import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { Container } from './style';
import React, {
	Fragment,
	useEffect,
	useState,
} from 'react';
import { MaterialTableDemo } from '../Table/index';

export const Main = () => {
	return (
		<Container>
			<MaterialTableDemo />
		</Container>
	);
};
