import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
import { fp } from 'lodash/fp';

const el = document.createElement('div');
document.body.appendChild(el);

render(<App />, el);
