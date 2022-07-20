import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/calculator';

describe('Jest Snapshot testing suite', () => {
  it('Matches DOM Snapshot', () => {
    const domTree = renderer.create(<Calculator />).toJSON();
    expect(domTree).toMatchSnapshot();
  });
});