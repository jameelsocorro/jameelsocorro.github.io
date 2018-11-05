import './app-styles';
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './modules/home';
import UiKitModule from './modules/ui-kit';

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/js-ui-kit" component={UiKitModule} />
				</Switch>
			</Router>
		);
	}
}

export default App;
