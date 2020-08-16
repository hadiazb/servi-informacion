import React from 'react';
import MaterialTable from 'material-table';
import { Container } from './style';
import useSwr from 'swr';

const fetcher = async (...args) =>
	await fetch(...args).then((response) =>
		response.json().then((response) => response.data)
	);

export const MaterialTableDemo = () => {
	const URL = 'https://www.trackcorona.live/api/provinces';
	const { data, error } = useSwr(URL, { fetcher });

	const usaData =
		data && !error
			? data.filter((i) => i.country_code === 'us')
			: [];

	const newArr = {
		columns: [
			{ title: 'State', field: 'location' },
			{ title: 'Confirmed', field: 'confirmed' },
		],
		data: usaData,
	};

	return (
		<Container>
			<MaterialTable
				columns={newArr.columns}
				data={newArr.data}
				title=''
				options={{ paging: false }}
				style={{
					backgroundColor: '#F1F7F1 ',
					fontSize: '16px',
				}}
			/>
		</Container>
	);
};
