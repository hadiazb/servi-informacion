import React, { useState } from 'react';
import { Container, Circle } from './style';
import GoogleMapReact from 'google-map-react';
import useSwr from 'swr';
import Swal from 'sweetalert2';
import mapStyle from '../../Hook/mapStyle';
// import '../../assets/styles/tableStyle.css';

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
							onClick={() =>
								Swal.fire({
									title: '<h4>Specific Dates</h4>',
									html: `
									<table style="width: 100%">
										<tr style="padding: 20">
											<th style="text-align: left">State</th>
											<td style="text-align: right">${i.location}</td>
										</tr>
										<tr>
											<th style="text-align: left">Code</th>
											<td style="text-align: right">${i.country_code.toUpperCase()}</td>
										</tr>
										<tr>
											<th style="text-align: left">Actives</th>
											<td style="text-align: right">${new Intl.NumberFormat(
												'de-DE'
											).format(
												i.confirmed - i.dead - i.recovered
											)}</td>
										</tr>
										<tr>
											<th style="text-align: left">Confirmed</th>
											<td style="text-align: right">${new Intl.NumberFormat(
												'de-DE'
											).format(i.confirmed)}</td>
										</tr>
										<tr>
											<th style="text-align: left">Dead</th>
											<td style="text-align: right">${new Intl.NumberFormat(
												'de-DE'
											).format(i.dead)}</td>
										</tr>
										<tr>
											<th style="text-align: left">Recovered</th>
											<td style="text-align: right">${
												i.recovered === null
													? 'No Update'
													: new Intl.NumberFormat('de-DE').format(
															i.recovered
													  )
											}</td>
										</tr>
										<tr>
											<th style="text-align: left">Update</th>
											<td style="text-align: right">${(
												(Date.parse(new Date()) -
													Date.parse(i.updated)) /
												6000000
											).toFixed(0)} min</td>
										</tr>
									</table>
									`,
									width: '320px',
									footer:
										'<h4 style="color: #29FB08">TrackCorona Data</h4>',
									padding: '5% 10px 20px',
									background: 'rgba(0, 0, 0, .5)',
									timer: 20000,
									confirmButtonText: 'View more',
									timerProgressBar: true,
								})
							}
						></Circle>
					</Marker>
				))}
			</GoogleMapReact>
		</Container>
	);
};
