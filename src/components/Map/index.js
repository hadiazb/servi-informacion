import React from 'react';
import { Container } from './style';
import GoogleMapReact from 'google-map-react';

export const Map = () => {
	return (
		<Container>
			<GoogleMapReact
				bootstrapURLKeys={{
					key: 'AIzaSyDmbtqh28Uxv1zM38FINetvopdOEHlLIXA',
				}}
				defaultCenter={{ lat: 40.3056, lng: -101.377568 }}
				defaultZoom={4.5}
			/>
		</Container>
	);
};
