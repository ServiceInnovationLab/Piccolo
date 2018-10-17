import React from 'react';
import Section from '../../elements/Section';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

test('Section default styles applied', () => {
  const tree = renderer.create(<Section />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('padding', '55px 0');
  expect(tree).toHaveStyleRule('text-align', 'left', {
    media: '(min-width: 1024px)'
  });
});

test('Dark Section default styles applied', () => {
  const tree = renderer.create(<Section dark />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('background', '#2f3045');
});

test('Light Section default styles applied', () => {
  const tree = renderer.create(<Section light />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('background', '#d9f8fa');
});

test('Grey Section default styles applied', () => {
  const tree = renderer.create(<Section grey />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('background', '#ccc');
});
