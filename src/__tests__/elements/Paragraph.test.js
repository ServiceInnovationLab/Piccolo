import React from 'react';
import renderer from 'react-test-renderer';
import Paragraph from '../../elements/Paragraph';
import 'jest-styled-components';

const paragraph = renderer.create(<Paragraph />).toJSON();
const paragraph_sm = renderer.create(<Paragraph small />).toJSON();
const paragraph_md = renderer.create(<Paragraph medium />).toJSON();
const paragraph_lg = renderer.create(<Paragraph large />).toJSON();
const paragraph_light = renderer.create(<Paragraph light />).toJSON();

test('Paragraph default styles applied', () => {
  expect(paragraph).toMatchSnapshot();
  expect(paragraph).toHaveStyleRule('font-size', '24px');
  expect(paragraph).toHaveStyleRule('color', '#000');
  expect(paragraph).toHaveStyleRule('height', 'auto');
});

test('Paragraph small styles applied', () => {
  expect(paragraph_sm).toMatchSnapshot();
  expect(paragraph_sm).toHaveStyleRule('font-size', '22px');
});

test('Paragraph medium styles applied', () => {
  expect(paragraph_md).toMatchSnapshot();
  expect(paragraph_md).toHaveStyleRule('font-size', '24px');
});

test('Paragraph large styles applied', () => {
  expect(paragraph_lg).toMatchSnapshot();
  expect(paragraph_lg).toHaveStyleRule('font-size', '34px');
});

test('Paragraph colour should be light if specified', () => {
  expect(paragraph_light).toMatchSnapshot();
  expect(paragraph_light).toHaveStyleRule('color', '#fff');
});

test('Paragraph height should be adjusted', () => {
  const tree = renderer.create(<Paragraph light adjust />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#fff');
  expect(tree).toHaveStyleRule('height', '100%');
});
