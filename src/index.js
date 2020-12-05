import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'leaflet/dist/leaflet.css'
import { MapPositionStore } from './Context/MapPositionStore';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { QueryStore } from './Context/QueryStore';
import { CurrentState } from './Context/CurrentState';
import '../node_modules/@ciar4n/izmir/izmir.css'

ReactDOM.render(
  <React.StrictMode>
    <CurrentState>
    <QueryStore>
    <MapPositionStore>
    <App />
    </MapPositionStore>
    </QueryStore>
    </CurrentState>
  </React.StrictMode>,
  document.getElementById('root')
);

