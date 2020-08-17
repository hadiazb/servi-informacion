import React from 'react';
import { Container, List, Item } from './style';
import { MyMap } from '../../components/LocalMap/index';
import Tx from '../../assets/dataMaps/TX.json';
import Al from '../../assets/dataMaps/AL.json';
import Ca from '../../assets/dataMaps/CA.json';
import Ny from '../../assets/dataMaps/NY.json';
import Ak from '../../assets/dataMaps/AK.json';

export const ListOfMaps = () => {
	const data = [
		{
			id: 1,
			title: 'TX',
			geojson: Tx,
			longitude: 31.9685988,
			latitude: -99.9018131,
		},
		{
			id: 2,
			title: 'AL',
			geojson: Al,
			longitude: 32.3182314,
			latitude: -86.902298,
		},
		{
			id: 3,
			title: 'CA',
			geojson: Ca,
			longitude: 36.778261,
			latitude: -119.4179324,
		},
		{
			id: 4,
			title: 'NY',
			geojson: Ny,
			longitude: 40.7127753,
			latitude: -74.0059728,
		},
		{
			id: 5,
			title: 'AK',
			geojson: Ak,
			longitude: 64.2008413,
			latitude: -149.4936733,
		},
	];

	console.log(data[0].geojson);
	return (
		<Container>
			<List>
				<Item>
					<MyMap
						key={data[0].id}
						title={data[0].title}
						latitude={data[0].latitude}
						longitude={data[0].longitude}
						data={data[0].geojson}
					/>
				</Item>
				<Item>
					<MyMap
						key={data[1].id}
						title={data[1].title}
						latitude={data[1].latitude}
						longitude={data[1].longitude}
						data={data[1].geojson}
					/>
				</Item>
				<Item>
					<MyMap
						key={data[2].id}
						title={data[2].title}
						latitude={data[2].latitude}
						longitude={data[2].longitude}
						data={data[2].geojson}
					/>
				</Item>
				<Item>
					<MyMap
						key={data[3].id}
						title={data[3].title}
						latitude={data[3].latitude}
						longitude={data[3].longitude}
						data={data[3].geojson}
					/>
				</Item>
				<Item>
					<MyMap
						key={data[4].id}
						title={data[4].title}
						latitude={data[4].latitude}
						longitude={data[4].longitude}
						data={data[4].geojson}
						zoom={2}
					/>
				</Item>
				<Item>
					<MyMap />
				</Item>
				<Item>
					<MyMap />
				</Item>
			</List>
		</Container>
	);
};
