import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
// import PrimeraApp from './PrimeraApp';

import './index.css';


const divRoot = document.querySelector('#root');

// document.body.append(saludo);
// ReactDOM.render(<PrimeraApp saludo='Hola, Soy Germán' />, divRoot);
ReactDOM.render(<CounterApp />, divRoot);