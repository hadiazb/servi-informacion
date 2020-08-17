import React from 'react';
import { Link } from 'react-router-dom';
import { Container, List, Item, Img } from './style';
import Logo from '../../../public/images/Servi.png';
import StorageIcon from '@material-ui/icons/Storage';
import MapIcon from '@material-ui/icons/Map';

export const Header = () => {
	return (
		<Container>
			<Link to='/'>
				<Img src={Logo} alt='Logo Servi-información' />
			</Link>
			<List>
				<Item>
					<Link to='/maps' style={{ color: 'white' }}>
						<MapIcon />
					</Link>
				</Item>
				<Item>
					<Link to='/list' style={{ color: 'white' }}>
						<StorageIcon />
					</Link>
				</Item>
			</List>
		</Container>
	);
};
