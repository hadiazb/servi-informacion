import React from 'react';
import {
	Container,
	Head,
	Total,
	Active,
	Dead,
	Recovered,
	Update,
	Img,
	Box,
	Title,
	Value,
} from './style';
import Logo from '../../../public/images/flag.svg';

export const GeneralData = (props) => {
	const {
		totalCases,
		totalActives,
		totalDead,
		totalRecovered,
		totalUpdate,
	} = props;
	return (
		<Container>
			<Head>
				<Box>
					<Img src={Logo} alt='' />
					<h2>United States</h2>
				</Box>
			</Head>
			<Total>
				<Title>Total Cases</Title>
				<Value>{totalCases ? totalCases : 'NaN'}</Value>
			</Total>
			<Active>
				<Title>Actives</Title>
				<Value>{totalActives ? totalActives : 'NaN'}</Value>
			</Active>
			<Dead>
				<Title>Dead</Title>
				<Value>{totalDead ? totalDead : 'NaN'}</Value>
			</Dead>
			<Recovered>
				<Title>Recovered</Title>
				<Value>{totalRecovered ? totalRecovered : 'NaN'}</Value>
			</Recovered>
			<Update>
				<Title>Update</Title>
				<Value>{totalUpdate ? totalUpdate : 'NaN'}</Value>
			</Update>
		</Container>
	);
};
