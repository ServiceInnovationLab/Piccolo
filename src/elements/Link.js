import React from 'react';
import styled from 'styled-components';

const LinkWrapper = styled.a`
  padding-bottom: 4px;
  font-size: 22px;
  font-weight: bold;
  display: inline-block;
  color: #000;
`;

const Icon = styled.span`
  svg {
    display: inline-block;
    font-size: 12px;
  }
  font-size: 22px;
`;

const Link = props => (
  <LinkWrapper href={props.href}>
    <Icon>{props.text}</Icon>
  </LinkWrapper>
);

export default Link;
