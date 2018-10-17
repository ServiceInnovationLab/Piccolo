import React from 'react';
import styled from 'styled-components';
import Paragraph from '../elements/Paragraph';

const MadLibWrapper = styled.div`
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
    width: 60px;
    background: #d9f8fa;
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

const MadLib = props => (
  <MadLibWrapper>
    <Paragraph>I am</Paragraph>
    <Input value={props.values.age} />
    <Paragraph>years old,</Paragraph><br />
    <Paragraph>I have lived in the country for</Paragraph>
    <Input value={props.values.years_lived_in_country} />
    <Paragraph> years.</Paragraph>
  </MadLibWrapper>
);

export default MadLib;
