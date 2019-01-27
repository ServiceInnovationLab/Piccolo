import React from 'react';
import renderer from 'react-test-renderer';
import Madlib from '../../components/Madlib';
import 'jest-styled-components';

test('Madlib renders correctly', () => {
  let values = {
    age: 55,
    years_worked: 55,
    years_lived_in_country: 40,
    number_of_children: 5,
    gender: 'woman',
  };
  const tree = renderer.create(<Madlib values={values} />).toJSON();
  expect(tree).toMatchSnapshot();
});
