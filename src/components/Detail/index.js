import React, { useState } from 'react';
import { Container, Card } from './style';

export const Detail = () => {
	const [flag, setFlag] = useState(true);
	console.log(flag);
	return (
		<div>
			{flag ? (
				<Container visibility='block'>
					<Card>
						<button onClick={() => setFlag(false)}>Salir</button>
					</Card>
				</Container>
			) : null}
		</div>
	);
};
