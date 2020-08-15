import { Container } from './style';
import React from 'react';
import { MaterialTableDemo } from '../Table/index';
import { GeneralData } from '../GeneralData/index';
import useSwr from 'swr';

const fetcher = async (...args) =>
	await fetch(...args).then((response) =>
		response.json().then((response) => response.data)
	);
export const Main = () => {
	const URL = 'https://www.trackcorona.live/api/countries';
	const { data, error } = useSwr(URL, { fetcher });

	const usaData =
		data && !error
			? data.filter((i) => i.country_code === 'us')[0]
			: [];

	const update = Date.parse(usaData.updated);
	const date = Date.parse(new Date());
	const time = ((date - update) / 60000).toFixed(0);

	return (
		<Container>
			<GeneralData
				country={usaData.location}
				totalCases={new Intl.NumberFormat('de-DE').format(
					usaData.confirmed
				)}
				totalActives={new Intl.NumberFormat('de-DE').format(
					usaData.confirmed - usaData.dead - usaData.recovered
				)}
				totalDead={new Intl.NumberFormat('de-DE').format(
					usaData.dead
				)}
				totalRecovered={new Intl.NumberFormat('de-DE').format(
					usaData.recovered
				)}
				totalUpdate={`${time} min`}
			/>
			<MaterialTableDemo />
		</Container>
	);
};
