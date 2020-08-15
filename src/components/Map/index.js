import React from 'react';
import { Container, Button } from './style';
import GoogleMapReact from 'google-map-react';
import useSwr from 'swr';
import Img from '../../../public/images/servi.svg'

const fetcher = (...args) =>
	fetch(...args).then((response) =>
		response.json().then((response) => response.data)
	);

const Marker = ({ children }) => children;

export const Map = () => {
	const URL = 'https://www.trackcorona.live/api/provinces';
	const { data, error } = useSwr(URL, { fetcher });


	const usaData =
		data && !error
			? data.filter((i) => i.country_code === 'us')
			: [];

	return (
		<Container>
			<GoogleMapReact
				bootstrapURLKeys={{
					key: 'AIzaSyDmbtqh28Uxv1zM38FINetvopdOEHlLIXA',
				}}
				defaultCenter={{ lat: 40.3056, lng: -101.377568 }}
				defaultZoom={4.5}
			/>
			{
				usaData.map(id => {
					<Marker  lat={id.latitude} lng={id.longitude}>
						<Button>
							<img src={Img} alt="Logo"/>
						</Button>
					</Marker>
				})
			}
		</Container>
	);
};
