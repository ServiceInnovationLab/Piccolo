import React, { Fragment } from 'react';
import styled from 'styled-components';
import cc from '../cc.svg';

const Text = styled.p`
  font-size: 16px;
  display: inline-block;
  margin-left: 10px;
  position: relative;
  top: -10px;
  @media(min-width: 1024px) {
    font-size: 24px;
    font-weight: 400;
    display: inline-block;
    margin-left: 15px;
  }
`;

export const CreativeCommons = props => (
  <Fragment>
    <img src={cc}
      alt="Creative Commons"
      height="35" />
    <Text>{props.label}</Text>
  </Fragment>
);
