import React from 'react';
import renderer from 'react-test-renderer';
import {SectionHeader} from '../../page/Header';
import 'jest-styled-components';

test('SectionHeader renders correctly', () => {
  let props = {
    title: 'this is the title',
    subtitle: 'this is the subtitle'
  };

  const tree = renderer.create(<SectionHeader {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
