import React from 'react';
import { render } from 'react-dom';
import App from './App';
import classNames from 'classnames';
import _ from 'lodash';
import { printSomething } from 'widgetC';

printSomething("print test");

const el = document.createElement('div');
document.body.appendChild(el);

render(<App />, el);
