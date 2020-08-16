import React, { useState } from 'react';
import { Container, Circle } from './style';
import GoogleMapReact from 'google-map-react';
import useSwr from 'swr';
import { Detail } from '../Detail/index';
import mapStyle from '../../Hook/mapStyle';

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

	const options = {
		styles: mapStyle,
		disableDefaultUI: true,
		zoomControl: true,
	};

	return (
		<Container>
			<GoogleMapReact
				bootstrapURLKeys={{
					key: 'AIzaSyDmbtqh28Uxv1zM38FINetvopdOEHlLIXA',
				}}
				defaultCenter={{ lat: 40.3056, lng: -101.377568 }}
				defaultZoom={4.5}
				options={options}
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
							onMouseOver={() => setFlag(true)}
							// onMouseOut={() => setFlag(false)}
							// onClick={() => setFlag(true)}
						></Circle>
					</Marker>
				))}
			</GoogleMapReact>
			{flag ? <Detail /> : null}
		</Container>
	);
};
