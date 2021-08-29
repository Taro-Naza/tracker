import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import AddApplication from './pages/AddApplication';
import Applications from './pages/Applications';
import Filters from './pages/Filters';
import NotFound from './pages/NotFound';
import ApplicationContextProvider from './context/ApplicationContext';
import Edit from './pages/Edit';

import './App.css';

function App() {
	return (
		<ApplicationContextProvider>
			<Router>
				<div className='app'>
					<Switch>
						<Route path='/' exact component={Home} />
						<Route path='/add' component={AddApplication} />
						<Route path='/list' component={Applications} />
						<Route path='/filters' component={Filters} />
						<Route path='/edit' component={Edit} />
						<Route path='*' component={NotFound} />
					</Switch>
				</div>
			</Router>
		</ApplicationContextProvider>
	);
}

export default App;
