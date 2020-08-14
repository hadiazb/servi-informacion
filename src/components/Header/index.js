import React from 'react';
import { Link } from 'react-router-dom';
import { Container, List, Item, Img } from './style';
import Logo from '../../../public/images/Servi.png';

export const Header = () => {
	return (
		<Container>
			<Link to='/'>
				<Img src={Logo} alt='Logo Servi-información' />
			</Link>
			<List>
				<Item>
					<h4>Covid-19</h4>
				</Item>
				<Item>
					<h4>Covid-19</h4>
				</Item>
			</List>
		</Container>
	);
};
