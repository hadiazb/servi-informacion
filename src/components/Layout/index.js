import React, { Children, Fragment } from 'react';
import { Header } from '../Header/index';
import { Footer } from '../Footer/Index';

export const Layout = ({ children }) => (
	<Fragment>
		<Header />
		{children}
		<Footer />
	</Fragment>
);
