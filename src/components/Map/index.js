import React, { useState } from 'react';
import { Container, Circle } from './style';
import GoogleMapReact from 'google-map-react';
import useSwr from 'swr';
import { Detail } from '../Detail/index';

const fetcher = async (...args) =>
	await fetch(...args).then((response) =>
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

	const [flag, setFlag] = useState(false);

	return (
		<Container>
			<GoogleMapReact
				bootstrapURLKeys={{
					key: 'AIzaSyDmbtqh28Uxv1zM38FINetvopdOEHlLIXA',
				}}
				defaultCenter={{ lat: 40.3056, lng: -101.377568 }}
				defaultZoom={4.5}
			>
				{usaData.map((i) => (
					<Marker
						key={i.latitude}
						lat={i.latitude}
						lng={i.longitude}
					>
						<Circle
							radius={`${Math.ceil(
								(i.confirmed / 613243) * 60
							)}px`}
							// onMouseOver={() => setFlag(true)}
							onClick={() => setFlag(true)}
						></Circle>
					</Marker>
				))}
			</GoogleMapReact>
			{flag ? <Detail /> : setFlag(true)}
		</Container>
	);
};
