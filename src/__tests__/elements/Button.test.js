import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../../elements/Button';
import 'jest-styled-components';

test('Button renders correctly', () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('background', '#019dff');
});
