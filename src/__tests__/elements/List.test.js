import React from 'react';
import renderer from 'react-test-renderer';
import List from '../../elements/List';
import 'jest-styled-components';

test('List should have no bullets', () => {
  const tree = renderer.create(<List stripped />).toJSON();
  expect(tree).toHaveStyleRule('list-style', 'none');
});
