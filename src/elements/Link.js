import React from 'react';
import styled from 'styled-components';

const LinkWrapper = styled.a`
  border-bottom: 3px solid #000;
  padding-bottom: 4px;
  font-size: 22px;
  font-weight: bold;
  display: inline-block;
  color: #000;
  text-decoration: none;
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
