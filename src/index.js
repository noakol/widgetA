import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
import classNames from 'classnames';
import _ from 'lodash';

const el = document.createElement('div');
document.body.appendChild(el);

render(<App />, el);
