import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TeamManagement from './TeamManagement';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<TeamManagement />, document.getElementById('root'));

serviceWorker.unregister();
