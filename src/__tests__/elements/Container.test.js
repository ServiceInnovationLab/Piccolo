import React from 'react';
import renderer from 'react-test-renderer';
import Container from '../../elements/Container';
import 'jest-styled-components';

test('Container renders correctly', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('width', '75%');
});
