import React from 'react';
import { Container, List, Item } from './style';
import { MyMap } from '../../components/LocalMap/index';
import { data } from '../../Hook/ArrayData';

export const ListOfMaps = () => {
	console.log(data);
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
					<MyMap
						key={data[5].id}
						title={data[5].title}
						latitude={data[5].latitude}
						longitude={data[5].longitude}
						data={data[5].geojson}
					/>
				</Item>
				<Item>
					<MyMap
						key={data[6].id}
						title={data[6].title}
						latitude={data[6].latitude}
						longitude={data[6].longitude}
						data={data[6].geojson}
					/>
				</Item>
			</List>
		</Container>
	);
};

// {data.map((id) => {
// 	<Item key={id}>
// 		<MyMap
// 			title={id.title}
// 			latitude={id.latitude}
// 			longitude={id.longitude}
// 			data={id.geojson}
// 		/>
// 	</Item>;
// })}
