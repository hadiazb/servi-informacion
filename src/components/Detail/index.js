import React from 'react';
import { Container, Card } from './style';

export const Detail = () => {
	return (
		<Container>
			<h3>Specific Data</h3>
			<table class='egt'>
				<tr>
					<th>Condición</th>
					<td>Soleado</td>
				</tr>
				<tr>
					<th>Temperatura</th>
					<td>19°C</td>
				</tr>
				<tr>
					<th>Vientos</th>
					<td>E 13 km/h</td>
				</tr>
			</table>
		</Container>
	);
};
