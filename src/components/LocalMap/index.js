import React from 'react';
import { Map, GeoJSON } from 'react-leaflet';
import { Container } from './style';
import Tx from '../../assets/dataMaps/TX.json';

export const MyMap = (props) => {
	const stateStyle = {
		fillColor: 'red',
		fillOpacity: 0.3,
		color: 'black',
		weight: 2,
	};

	const { title, data, longitude, latitude, zoom } = props;

	return (
		<Container>
			<Map
				style={{ height: '100%', width: '100%' }}
				zoom={zoom ? zoom : 4}
				center={[
					longitude ? longitude : 31.9685988,
					latitude ? latitude : -99.9018131,
				]}
				zoomControl={false}
			>
				<GeoJSON style={stateStyle} data={data ? data : Tx} />
			</Map>
			<h4>{title ? title : 'No hay'}</h4>
		</Container>
	);
};
