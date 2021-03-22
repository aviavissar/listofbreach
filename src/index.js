import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css'
import './App.scss';


import * as serviceWorker from './serviceWorker';
import App from './App';
import { TaskAppProvider } from '../src/state/Tasks.store'


ReactDOM.render( <TaskAppProvider><App /></TaskAppProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
