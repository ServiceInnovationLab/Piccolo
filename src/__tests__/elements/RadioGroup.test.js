import React from 'react';
import renderer from 'react-test-renderer';
import RadioGroup from '../../elements/RadioGroup';
import 'jest-styled-components';

test('RadioGroup renders correctly', () => {
  const tree = renderer.create(<RadioGroup values={['yes', 'no']} />).toJSON();
  expect(tree).toMatchSnapshot();
});
