import React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../elements/Paragraph';

const MadlibWrapper = styled.div`
  text-align: center;

  > p {
    margin-bottom: 5px;
    font-size: 28px;
    @media(min-width: 1024px) {
      font-size: 34px;
    }
  }

  > p,
  input[type=text] {
    display: inline-block;
  }

  input[type=text] {
    width: 100px;
  }

`;

const Input = styled.input.attrs({ type: 'text' })`
  display: inline-block;
  border: none;
  border-bottom: 2px solid #000;
  font-size: 24px;
  margin: 0 10px;
  @media(min-width: 1024px) {
    font-size: 34px;
  }
`;

export const Madlib = () => (
  <MadlibWrapper>
    <Paragraph>I am</Paragraph>
    <Input />
    <Paragraph> years old, I have lived in the country for</Paragraph>
    <Input />
    <Paragraph> years.</Paragraph>
  </MadlibWrapper>
);

