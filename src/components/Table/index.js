import React from 'react';
import MaterialTable from 'material-table';
import { Container } from './style';

export const MaterialTableDemo = () => {
	const arr = {
		columns: [
			{ title: 'State', field: 'location' },
			{ title: 'Confirmed', field: 'confirmed' },
		],
		data: [
			{
				location: 'Assam',
				country_code: 'in',
				latitude: 26.2006043,
				longitude: 92.9375739,
				confirmed: 8227,
				dead: 12,
				recovered: 5647,
				updated: '2020-07-01 06:48:22.696131+00:00',
			},
			{
				location: 'Northwest Territories',
				country_code: 'ca',
				latitude: 64.8255441,
				longitude: -124.8457334,
				confirmed: 5,
				dead: 0,
				recovered: null,
				updated: '2020-08-13 00:00:00+00:00',
			},
			{
				location: 'New York',
				country_code: 'us',
				latitude: 40.7127753,
				longitude: -74.0059728,
				confirmed: 428155,
				dead: 32399,
				recovered: null,
				updated: '2020-08-13 23:16:50.197936+00:00',
			},
			{
				location: 'Colorado',
				country_code: 'us',
				latitude: 39.5500507,
				longitude: -105.7820674,
				confirmed: 52242,
				dead: 1886,
				recovered: null,
				updated: '2020-08-13 23:16:50.197936+00:00',
			},
			{
				location: 'Oregon',
				country_code: 'us',
				latitude: 43.8041334,
				longitude: -120.5542012,
				confirmed: 22315,
				dead: 387,
				recovered: null,
				updated: '2020-08-13 23:16:50.197936+00:00',
			},
			{
				location: 'Illinois',
				country_code: 'us',
				latitude: 40.6331249,
				longitude: -89.3985283,
				confirmed: 202577,
				dead: 7934,
				recovered: null,
				updated: '2020-08-13 23:16:50.197936+00:00',
			},
			{
				location: 'Kentucky',
				country_code: 'us',
				latitude: 37.8393332,
				longitude: -84.2700179,
				confirmed: 39306,
				dead: 817,
				recovered: null,
				updated: '2020-08-13 23:16:50.197936+00:00',
			},
			{
				location: 'Quebec',
				country_code: 'ca',
				latitude: 52.9399159,
				longitude: -73.5491361,
				confirmed: 60917,
				dead: 5715,
				recovered: null,
				updated: '2020-08-13 00:00:00+00:00',
			},
			{
				location: 'Île-de-France',
				country_code: 'fr',
				latitude: 48.8499198,
				longitude: 2.6370411,
				confirmed: 40229,
				dead: 7627,
				recovered: 30045,
				updated: '2020-08-14 23:18:49.686648+00:00',
			},
			{
				location: 'Andaman and Nicobar Islands',
				country_code: 'in',
				latitude: 11.7400867,
				longitude: 92.6586401,
				confirmed: 97,
				dead: 0,
				recovered: 50,
				updated: '2020-07-01 06:48:22.696131+00:00',
			},
			{
				location: 'Hamburg',
				country_code: 'de',
				latitude: 53.5510846,
				longitude: 9.9936819,
				confirmed: 5821,
				dead: 264,
				recovered: null,
				updated: '2020-08-14 23:19:18.339118+00:00',
			},
			{
				location: 'Maine',
				country_code: 'us',
				latitude: 45.253783,
				longitude: -69.4454689,
				confirmed: 4089,
				dead: 126,
				recovered: null,
				updated: '2020-08-14 23:15:32.723705+00:00',
			},
			{
				location: 'Nordrhein-Westfalen',
				country_code: 'de',
				latitude: 51.43323669999999,
				longitude: 7.661593799999999,
				confirmed: 53661,
				dead: 1772,
				recovered: null,
				updated: '2020-08-14 23:19:18.390977+00:00',
			},
			{
				location: 'Newfoundland and Labrador',
				country_code: 'ca',
				latitude: 53.1355091,
				longitude: -57.6604364,
				confirmed: 268,
				dead: 3,
				recovered: null,
				updated: '2020-08-13 00:00:00+00:00',
			},
			{
				location: 'Montana',
				country_code: 'us',
				latitude: 46.8796822,
				longitude: -110.3625658,
				confirmed: 5430,
				dead: 81,
				recovered: null,
				updated: '2020-08-13 23:16:50.197936+00:00',
			},
			{
				location: 'Nova Scotia',
				country_code: 'ca',
				latitude: 44.68198659999999,
				longitude: -63.744311,
				confirmed: 1071,
				dead: 64,
				recovered: null,
				updated: '2020-08-13 00:00:00+00:00',
			},
			{
				location: 'Arkansas',
				country_code: 'us',
				latitude: 35.20105,
				longitude: -91.8318334,
				confirmed: 51766,
				dead: 582,
				recovered: null,
				updated: '2020-08-14 23:15:32.723705+00:00',
			},
			{
				location: 'Rondônia',
				country_code: 'br',
				latitude: -11.5057341,
				longitude: -63.580611,
				confirmed: 11224,
				dead: 296,
				recovered: 3700,
				updated: '2020-06-12 00:00:00+00:00',
			},
			{
				location: 'Niedersachsen**',
				country_code: 'de',
				latitude: 52.6367036,
				longitude: 9.8450766,
				confirmed: 13136,
				dead: 618,
				recovered: null,
				updated: '2020-06-22 08:34:45.398910+00:00',
			},
		],
	};

	return (
		<Container>
			<MaterialTable
				columns={arr.columns}
				data={arr.data}
				title='USA'
				options={{ paging: false }}
			/>
		</Container>
	);
};
