import React from 'react';
import styled from 'styled-components';

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${props => (props.dark ? '#2e4554' : '#50a3d7')};
  margin: 0 auto;
  margin-bottom: 40px;

  > span {
    width: 100px;
    display: inline-block;
    font-size: 45px;
    font-weight: bold;
    color: #fff;
    text-align: center;
    line-height: 100px;
  }
`;

export const IconCircle = props => (
  <Circle>
    {<span>{props.value}</span>}
  </Circle>
);
