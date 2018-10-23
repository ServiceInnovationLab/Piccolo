import React from 'react';
import renderer from 'react-test-renderer';
import Section from '../../elements/Section';
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
  background(section_dark, '#2f3045');
});

test('Light Section default styles applied', () => {
  expect(section_light).toMatchSnapshot();
  background(section_light, '#d9f8fa');
});

test('Grey Section default styles applied', () => {
  expect(section_grey).toMatchSnapshot();
  background(section_grey, '#ccc');
});

function background(section, color) {
  expect(section).toHaveStyleRule('background', color);
}
