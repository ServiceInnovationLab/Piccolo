import React from 'react';
import Grid, { Column } from '../../elements/Grid';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

test('Grid renders correctly', () => {
  const tree = renderer.create(<Grid />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('margin', '30px 0');
});

test('Column renders correctly', () => {
  const tree = renderer.create(<Column />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('padding', '0 40px 10px 40px');
  expect(tree).toHaveStyleRule('border-top', '1px solid #000');
  expect(tree).toHaveStyleRule('padding-top', '40px');
  expect(tree).toHaveStyleRule('margin-top', '50px');
});
