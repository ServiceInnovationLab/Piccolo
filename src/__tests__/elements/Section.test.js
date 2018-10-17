import React from 'react';
import Section from '../../elements/Section';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

const section_dark = renderer.create(<Section dark />).toJSON();
const section_light = renderer.create(<Section light />).toJSON();
const section_grey = renderer.create(<Section grey />).toJSON();

test('Section default styles applied', () => {
  const tree = renderer.create(<Section />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('padding', '55px 0');
  expect(tree).toHaveStyleRule('text-align', 'left', {
    media: '(min-width: 1024px)'
  });
});

test('Dark Section default styles applied', () => {
  expect(section_dark).toMatchSnapshot();
  expect(section_dark).toHaveStyleRule('background', '#2f3045');
});

test('Light Section default styles applied', () => {
  expect(section_light).toMatchSnapshot();
  expect(section_light).toHaveStyleRule('background', '#d9f8fa');
});

test('Grey Section default styles applied', () => {
  expect(section_grey).toMatchSnapshot();
  expect(section_grey).toHaveStyleRule('background', '#ccc');
});
