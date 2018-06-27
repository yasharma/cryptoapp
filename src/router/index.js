import React from 'react';
import { Route, Switch } from 'react-router'; // react-router v4
import { ConnectedRouter } from 'connected-react-router';
import Home from 'components/Home';
export const Router = props => {
	const { history } = props;
	return (
		<ConnectedRouter history={history}>
		<div> 
			<Switch>
				<Route path="/" exact={true} component={Home} />
		  	</Switch>
		  	{/* <Footer/> */}
		 </div>	 	
		</ConnectedRouter>
	);	
}