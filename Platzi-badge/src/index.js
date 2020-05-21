import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

import './global.css';
import Badges from './pages/Badges';
import BadgeNew from './pages/BadgeNew';
import App from './components/App';


const container = document.getElementById('app');

ReactDOM.render(<App />,container)

// ReactDOM.render(<Badge 
//     firstName="Raphael" 
//     lastName="Hinostroza" 
//     avatarUrl="https://s.gravatar.com/avatar/47cb3468698c5d009196a78ab62a9745?s=80"
//     jobTitle="System Auditor"
//     twitter="rhinostroza" 
//     />, container);
