import React from 'react';
import {
	Container,
	Table,
	Row,
	CellTh,
	CellTd,
} from './style';
import useSwr from 'swr';

const fetcher = async (...args) =>
	await fetch(...args).then((response) =>
		response.json().then((response) => response.data)
	);

export const AllDetails = () => {
	const URL = 'https://www.trackcorona.live/api/provinces';

	const { data, error } = useSwr(URL, { fetcher });

	const usaData =
		data && !error
			? data.filter((i) => i.country_code === 'us')
			: [];
	console.log(usaData);

	const rows = () =>
		usaData.map((i, key) => (
			<Row key={i.latitude}>
				<CellTd orientation='center'>{i.country_code.toUpperCase()}</CellTd>
				<CellTd orientation='left'>{i.location}</CellTd>
				<CellTd orientation='right'>
					{new Intl.NumberFormat('de-DE').format(i.confirmed)}
				</CellTd>
				<CellTd orientation='right'>
					{new Intl.NumberFormat('de-DE').format(i.confirmed)}
				</CellTd>
				<CellTd orientation='right'>{new Intl.NumberFormat('de-DE').format(i.dead)}</CellTd>
				<CellTd >
					{i.recovered
						? new Intl.NumberFormat('de-DE').format(i.recovered)
						: 'Sin dato'}
				</CellTd>
				<CellTd orientation='right'>{`${(
					(Date.parse(new Date()) - Date.parse(i.updated)) /
					6000000
				).toFixed(0)} min`}</CellTd>
				<CellTd orientation='right'>{key + 1}</CellTd>
			</Row>
		));

	return (
		<Container>
			<h1>All Data</h1>
			<Table>
				<thead>
					<Row>
						<CellTh orientation='center'>Country</CellTh>
						<CellTh >State</CellTh>
						<CellTh orientation='left'>Confirmed</CellTh>
						<CellTh orientation='left'>Actives</CellTh>
						<CellTh orientation='left'>Dead</CellTh>
						<CellTh orientation='left'>Recovered</CellTh>
						<CellTh orientation='left'>Update</CellTh>
						<CellTh orientation='center'>Key</CellTh>
					</Row>
				</thead>
				<tbody>{rows()}</tbody>
			</Table>
		</Container>
	);
};
