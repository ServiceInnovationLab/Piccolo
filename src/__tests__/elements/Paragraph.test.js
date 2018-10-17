import React from 'react';
import Paragraph from '../../elements/Paragraph';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

test('Paragraph default styles applied', () => {
  const tree = renderer.create(<Paragraph />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('font-size', '24px');
  expect(tree).toHaveStyleRule('color', '#000');
  expect(tree).toHaveStyleRule('height', 'auto');
});

test('Paragraph small styles applied', () => {
  const tree = renderer.create(<Paragraph small />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('font-size', '22px');
});

test('Paragraph medium styles applied', () => {
  const tree = renderer.create(<Paragraph medium />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('font-size', '24px');
});

test('Paragraph large styles applied', () => {
  const tree = renderer.create(<Paragraph large />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('font-size', '34px');
});

test('Paragraph colour should be light if specified', () => {
  const tree = renderer.create(<Paragraph light />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#fff');
});

test('Paragraph height should be adjusted', () => {
  const tree = renderer.create(<Paragraph light adjust />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('height', '55px');
});
