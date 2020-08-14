import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { Home } from '../container/Home/index';
import { Layout } from '../components/Layout/index';
import { FatalError } from '../container/FatalError/index';

export const App = () => {
	return (
		<Router>
			<GlobalStyle />
			<Layout>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/*' component={FatalError} />
				</Switch>
			</Layout>
		</Router>
	);
};
