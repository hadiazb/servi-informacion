import React, { useState, useEffect } from 'react';
import { Container, Circle, Box } from './style';
import GoogleMapReact from 'google-map-react';
import useSwr from 'swr';

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
									(i.confirmed / 613243) * 100
								)}px`}
							>
								X
							</Circle>
						</Marker>
				))}
			</GoogleMapReact>
		</Container>
	);
};
