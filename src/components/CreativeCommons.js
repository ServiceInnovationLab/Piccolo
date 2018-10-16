import React, {Fragment} from 'react';
import styled from 'styled-components';
import { Icon } from '../elements/Icon';

const Text = styled.p`
  font-size: 24px;
  font-weight: 400;
  display: inline-block;
  margin-left: 15px;
`;

export const CreativeCommons = props => (
  <Fragment>
    <Icon creative_commons />
    <Text>{props.label}</Text>
  </Fragment>
);

