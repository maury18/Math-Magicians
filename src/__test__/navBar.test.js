/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import navBar from '../components/navBar';

test('renders correctly', () => {
  const nav = renderer.create(<Router><navBar /></Router>).toJSON();
  expect(nav).toMatchSnapshot();
});
