import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import registerServiceWorker from './registerServiceWorker';

import 'semantic-ui-css/semantic.min.css';
import './components/app.css';

import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';

const Root = () => {
    return(
        <Router>
            <Switch>
                <Route exact path = '/' component = {App} />
                <Route exact path = '/login' component = {Login} /> 
                <Route exact path = '/register' component = {Register} />
            </Switch>
        </Router>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
