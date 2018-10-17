import React from 'react';
import List from '../../elements/List';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

test('List should have no bullets', () => {
  const tree = renderer.create(<List stripped />).toJSON();
  expect(tree).toHaveStyleRule('list-style', 'none');
});
