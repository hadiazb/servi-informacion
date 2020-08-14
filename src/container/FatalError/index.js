import React from 'react';
import { Container, Img, Title } from './style';
import logo from '../../../public/images/Logo.png';
import { Link } from 'react-router-dom';

export const FatalError = () => {
	return (
		<Container>
			<Img src={logo} alt='' />
			<Title>Pagina no encontrada</Title>
			<h3>
				Te invitamos a Volver al <Link to='/'>Home</Link> para
				que sigas disfrutando de nuestros servicios
			</h3>
		</Container>
	);
};
