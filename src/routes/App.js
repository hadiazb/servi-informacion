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
import { ListOfCountries } from '../container/ListaOfCountries/index';
import { ListOfMaps } from '../container/ListOfMaps/index';

export const App = () => {
	return (
		<Router>
			<GlobalStyle />
			<Layout>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/maps' component={ListOfMaps} />
					<Route
						exact
						path='/list'
						component={ListOfCountries}
					/>
					<Route path='/*' component={FatalError} />
				</Switch>
			</Layout>
		</Router>
	);
};
