import React from 'react';
import RadioGroup from '../../elements/RadioGroup';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

test('RadioGroup renders correctly', () => {
  const tree = renderer.create(<RadioGroup values={['yes', 'no']}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
