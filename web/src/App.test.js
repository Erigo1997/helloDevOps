import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter} from "react-router-dom";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HashRouter><App /></HashRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Calculation test', () => {
  expect(6*6).toBe(36);
})

it('renders welcome message', () => {
  const { getByText } = render(<HashRouter><App /></HashRouter>);
  expect(getByText('Startside')).toBeInTheDocument();
});

